
import conectarAoBanco from "../config/dbConfig.js"; // import the database connection file

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO); // Accesses the database connection string

export async function getTodosPost(){
    const db = conexao.db("instabytes");  // connects to database instabytes
    const colecao = db.collection("posts"); // access the collection posts

    return colecao.find().toArray(); // No filters or criteria passed Convert array of objects
}

export async function criarPost(novoPost){
    const db = conexao.db("instabytes");
    const colecao = db.collection("posts");

    return colecao.insertOne(novoPost); // Insert the new post
}