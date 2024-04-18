const { getCharacters, postCharacter, updateCharacter, getCharactersByCrew, getCharactersById, deleteCharacter } = require("../controllers/character");

const characterRoutes = require("express").Router();

characterRoutes.get("/", getCharacters);
characterRoutes.get("/getById/:id", getCharactersById);
characterRoutes.get("/getByCrew/:crew", getCharactersByCrew);
characterRoutes.post("/", postCharacter);
characterRoutes.put("/:id", updateCharacter);
characterRoutes.delete("/:id",deleteCharacter);

module.exports = characterRoutes;