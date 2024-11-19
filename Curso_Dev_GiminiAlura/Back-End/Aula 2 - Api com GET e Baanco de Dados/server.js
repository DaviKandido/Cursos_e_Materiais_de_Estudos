
import express from "express";  // Import express


const app = express();  // Create an instance of express

const porta = 3000;


const posts = [
    {
        id: 1,
        descricao: "Uma foto test",
        imagem: "https://picsum.photos/200/300",
    },
    {
        id: 2,
        descricao: "Paisagem ao entardecer",
        imagem: "https://picsum.photos/200/301",
    },
    {
        id: 3,
        descricao: "Montanhas cobertas de neve",
        imagem: "https://picsum.photos/200/302",
    },
    {
        id: 4,
        descricao: "Flores coloridas na primavera",
        imagem: "https://picsum.photos/200/303",
    },
    {
        id: 5,
        descricao: "Cachoeira em meio à floresta",
        imagem: "https://picsum.photos/200/304",
    },
    {
        id: 6,
        descricao: "Cidade iluminada à noite",
        imagem: "https://picsum.photos/200/305",
    }
];

app.use(express.json()); // Middleware to parse JSON request bodies (Indica que a aplicação usara formatação JSON)

app.listen(porta, () => {
    console.log(`Server running on port ${porta}`); // Log a message to the console
}); // Start the server


// Create a route (Rota)
app.get("/posts", (rec,res )=>{ // REC = Requisição, RES = Resposta
    res.status(200).json(posts); //(enviar) Send a response in JSON

});


//Create a function to search for a post with the id sought
function buscaPostPorId(id) { 

    return posts.findIndex((post)=> {
        return post.id === Number(id);
    }) // Find the post with the given id

}

// Create a route (Rota )with parameter
app.get("/posts/:id", (rec,res )=>{ 

    const index = buscaPostPorId(rec.params.id); // Get the id from the request
    res.status(200).json(posts[index]); // Send a response in JSON

});


