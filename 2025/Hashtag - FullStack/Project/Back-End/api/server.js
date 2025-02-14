//Api significa Application Programming Interface
import express from "express"

import { db } from "./connect.js"
import cors from "cors"

const app = express();

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})


app.use(cors({origin: "http://localhost:3000"}));
app.use(express.json());


app.get("/", (req, res) => {
  res.send("Só vamos trabalhas com os endpoints '/artists' e '/songs' ")
})

app.get("/artists", async (req, res) => {
  res.send(await db.collection("artists").find({}).toArray())
})


app.get("/songs", async(req, res) => {
  res.send(await db.collection("songs").find({}).toArray())
})

export { app }