import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import User from "./models/User.js"

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://sssiliguri5:OGB2p2xb0rAy3k0E@cluster0.rue8she.mongodb.net/Coursera?retryWrites=true&w=majority")
    .then(() => console.log("Mongodb Connected"))
    .catch((err) => console.log(err))

app.get("/api/user", async (req, res) => {
    await User.find()
    .then((users) => res.json(users))
    .catch((err) => console.log(err))
})

app.post("/api/user", async (req, res) => {
    await User.create(req.body)
    .then((user) => res.json(user))
    .catch((err) => console.log(err))
})

app.post("/api/user/auth", async (req, res) => {
    await User.findOne(req.body)
    .then((user) => res.json(user))
    .catch((err) => console.log(err))
})




const PORT = "3000"

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}/`)
})