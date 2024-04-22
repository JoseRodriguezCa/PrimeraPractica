const { getCharacters, postCharacter, updateCharacter, getCharactersByCrew, getCharactersById, deleteCharacter } = require("../controllers/character");

const characterRoutes = require("express").Router();


characterRoutes.get("/getById/:id", getCharactersById);
characterRoutes.get("/getByCrew/:crew", getCharactersByCrew);
characterRoutes.get("/", getCharacters);
characterRoutes.post("/", postCharacter);
characterRoutes.put("/:id", updateCharacter);
characterRoutes.delete("/:id",deleteCharacter);


module.exports = characterRoutes;