const { getdevilFruits, postdevilFruit, updatedevilFruit, getdevilFruitsById, deletedevilFruit } = require("../controllers/devilFruit");

const devilFruitRoutes = require("express").Router();


devilFruitRoutes.get("/getById/:id", getdevilFruitsById);
devilFruitRoutes.get("/", getdevilFruits);
devilFruitRoutes.post("/", postdevilFruit);
devilFruitRoutes.put("/:id", updatedevilFruit);
devilFruitRoutes.delete("/:id", deletedevilFruit);


module.exports = devilFruitRoutes;