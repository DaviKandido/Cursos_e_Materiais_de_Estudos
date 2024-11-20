import { getTodosPost } from "../models/postsModel.js";


export async function listarPosts(rec,res){ // REC = Requisição, RES = Resposta

    const posts = await getTodosPost();
    res.status(200).json(posts); //(enviar) Send a response in JSON
}

