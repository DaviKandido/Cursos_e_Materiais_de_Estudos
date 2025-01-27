import express from 'express';
import multer from 'multer';

import { listarPosts, PostarNovoPost, uploadImagem } from '../controllers/postsController.js';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./uploads/");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + file.originalname);
    }
})

const upload = multer({dest: "./uploads/", storage}); // Middleware to handle file uploads
// Linux ou no mac nao precisa passar o caminho (storange), mas no windows precisa

const routes = (app) => {

    app.use(express.json()); // Middleware to parse JSON request bodies (Indica que a aplicação usara formatação JSON)

    // Create a route(Rota) get all posts
    app.get("/posts", listarPosts);

    // Create a route(Rota) post new posts
    app.post("/posts", PostarNovoPost);

    // Create a route(Rota) upload image
    app.post("/upload", upload.single("imagem"), uploadImagem);

}


export default routes; // route sport encapsulation