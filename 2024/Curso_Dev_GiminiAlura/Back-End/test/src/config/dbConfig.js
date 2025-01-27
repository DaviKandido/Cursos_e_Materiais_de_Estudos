import { MongoClient } from "mongodb";

/**
 * Connects to a MongoDB database using the provided connection string.
 * 
 * @param {string} stringConexao - The connection string for the MongoDB database.
 * @returns {Promise<MongoClient>} - Returns a promise that resolves to the connected MongoClient.
 */

export default async function connectDataBase(stringConexao) {
    let mongoClient;

    try {
        mongoClient = new MongoClient(stringConexao);
        console.log("Conectando ao cluster do MongoDB...");
        await MongoClient.connect();
        console.log("Conectado ao cluster do MongoDB!");
        return MongoClient;
    } catch (error) {
        console.log("falha na conexão com o banco!", error)
        process.exit();
    }

}