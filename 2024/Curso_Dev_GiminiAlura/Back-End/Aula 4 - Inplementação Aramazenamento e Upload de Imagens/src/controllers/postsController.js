import { getTodosPost, criarPost } from "../models/postsModel.js";
import fs from 'fs';


export async function listarPosts(rec,res){ // REC = Requisição, RES = Resposta

    const posts = await getTodosPost();
    res.status(200).json(posts); //(enviar) Send a response in JSON
}

export async function PostarNovoPost(rec, res) { 

    const novoPost = rec.body; // get the body of the request

    try{
        const postCriado = await criarPost(novoPost);
        res.status(201).json(postCriado);
    }catch(erro){
        console.error(erro.message);
        res.status(500).json({"Erro": "Falha na requisição, erro ao enviar post"});
    }
 }


export async function uploadImagem(rec, res) { 

    const novoPost = {
        descricao: "",
        imagem: rec.file.originalname,
        alt: ""
    }; 

    try{
        const postCriado = await criarPost(novoPost);
        const imagemAtualizada = `uploads/${postCriado.insertedId}.png`;
        fs.renameSync(rec.file.path, imagemAtualizada);
        res.status(201).json(postCriado);
    }catch(erro){
        console.error(erro.message);
        res.status(500).json({"Erro": "Falha na requisição, erro ao enviar post"});
    }
 }
