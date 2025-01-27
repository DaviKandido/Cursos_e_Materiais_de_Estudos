import connectDataBase from "../config/dbConfig.js"; 

const conexao = await connectDataBase(process.env.STRING_CONEXAO)

export async function getAllBarbers() {
    const db = conexao.db("BarberDataBase")
    const colecao = db.collection("barbeiros")

    return colecao.find().toArray();;
}
