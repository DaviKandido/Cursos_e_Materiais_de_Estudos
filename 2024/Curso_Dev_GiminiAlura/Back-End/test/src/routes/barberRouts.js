import express  from "express";
import { getAllBarbersController } from "../controllers/barberControllers.js";

const routes = (app) => {
    
    app.use(express.json());

    app.get("/barbers", getAllBarbersController)
}

export default routes