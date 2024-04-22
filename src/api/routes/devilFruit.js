const { getdevilFruits, postdevilFruit, updatedevilFruit, getdevilFruitsByCrew, getdevilFruitsById, deletedevilFruit } = require("../controllers/devilFruit");

const devilFruitRoutes = require("express").Router();


devilFruitRoutes.get("/getById/:id", getdevilFruitsById);
devilFruitRoutes.get("/getByCrew/:crew", getdevilFruitsByCrew);
devilFruitRoutes.get("/", getdevilFruits);
devilFruitRoutes.post("/", postdevilFruit);
devilFruitRoutes.put("/:id", updatedevilFruit);
devilFruitRoutes.delete("/:id", deletedevilFruit);


module.exports = devilFruitRoutes;