require("dotenv").config();
const express = require("express");
const { connectDB } = require("./src/config/db");
const characterRoutes = require("./src/api/routes/character");
const devilFruitRoutes = require("./src/api/routes/devilfruit");

const app =  express();


connectDB();

app.use(express.json());

app.use("/api/v1/devilFruits", devilFruitRoutes);
app.use("/api/v1/characters", characterRoutes);


app.use("/ping" , (req,res,next) => {
    return res.status(200).json("pong");
});

app.use("*", (req, res, next) => {
    return res.status(400).json("Rute not found");
})


app.listen(3000, ()=> {
    console.log("http://localhost:3000");
});