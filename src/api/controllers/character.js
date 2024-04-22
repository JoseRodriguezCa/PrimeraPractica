const Character = require("../models/character");

const getCharacters = async (req, res, next) => {
    try {
        
        const allCharacters = await Character.find().populate("devilFruit");

        return res.status(200).json(allCharacters);

    } catch (error) {
        return res.status(400).json("Ha fallado al peticion en get");
}
};

const postCharacter = async (req,res,next) => {
    try {
        const newCharacter = new Character(req.body);


        const characterSaved = await newCharacter.save();

        return res.status(201).json(characterSaved);
    } catch (error) {
        return res.status(400).json("Ha fallado al peticion en post");
    }
};

const updateCharacter = async (req,res,next) => {
    try {
        const { id } = req.params;
        const newCharacter = new Character (req.body);
        newCharacter._id = id;
        const updateCharacter = await Character.findByIdAndUpdate(id, newCharacter, {
            new:true
        });
        return res.status(200).json(updateCharacter);
    } catch (error) {
        return res.status(400).json("Ha fallado al peticion en put");
    }
};

const deleteCharacter = async (req,res,next) => {
    try {
        const { id } = req.params;
        const deleteCharacter = await Character.findByIdAndDelete(id);
        return res.status(200).json(deleteCharacter);
    } catch (error) {
        return res.status(400).json("Ha fallado al peticion en delete");
    }
};

const getCharactersById = async (req,res,next) => {
    try {
        const { id } = req.params;
        const characterById = await Character.findById(id).populate("devilFruit");
        return res.status(200).json(characterById);
    } catch (error) {
        return res.status(400).json("Ha fallado al peticion en getById");
    }
};

const getCharactersByCrew = async (req,res,next) => {
    try {
        const { crew } = req.params;
        const CharacterByCrew = await Character.find({ crew }).populate("devilFruit");
        return res.status(200).json(CharacterByCrew);
    } catch (error) {
        return res.status(400).json("Ha fallado al peticion en getByCrew");
    }

}

module.exports = { getCharacters,postCharacter,updateCharacter,getCharactersById,getCharactersByCrew,deleteCharacter }