import express from 'express';
import { listarPosts } from '../controllers/postsController.js';



const routes = (app) => {

    app.use(express.json()); // Middleware to parse JSON request bodies (Indica que a aplicação usara formatação JSON)

    // Create a route(Rota) get all posts
    app.get("/posts", listarPosts);

}


export default routes; // route sport encapsulation