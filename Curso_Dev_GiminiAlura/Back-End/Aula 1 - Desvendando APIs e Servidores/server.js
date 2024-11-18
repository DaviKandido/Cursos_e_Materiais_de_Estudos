import express from "express";  // Import express

const app = express();  // Create an instance of express

const porte = 3000;

app.listen(porte, () => {
    console.log(`Server running on port ${porte}`); // Log a message to the console
}); // Start the server


// Create a route (Rota)
app.get("/api", (rec,res )=>{ // REC = Requisição, RES = Resposta
    res.status(200).send("Hello World!"); //(enviar) Send a response

});


