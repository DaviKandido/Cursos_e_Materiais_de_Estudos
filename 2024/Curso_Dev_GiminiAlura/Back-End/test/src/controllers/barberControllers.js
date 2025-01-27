import { getAllBarbers } from "../models/barberModels.js"

export async function getAllBarbersController(req, res) {
    const barbers = await getAllBarbers()
    res.status(200).send(barbers)
}