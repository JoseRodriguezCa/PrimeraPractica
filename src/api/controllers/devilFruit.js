const devilFruit = require("../models/devilfruit");

const getdevilFruits = async (req, res, next) => {
    try {
        
        const alldevilFruits = await devilFruit.find();


        return res.status(200).json(alldevilFruits);

    } catch (error) {
        return res.status(400).json("Ha fallado al peticion en get");
}
};

const postdevilFruit = async (req,res,next) => {
    try {
        const newdevilFruit = new devilFruit(req.body);


        const devilFruitsaved = await newdevilFruit.save();

        return res.status(201).json(devilFruitsaved);
    } catch (error) {
        return res.status(400).json("Ha fallado al peticion en post");
    }
};

const updatedevilFruit = async (req,res,next) => {
    try {
        const { id } = req.params;
        const newdevilFruit = new devilFruit (req.body);
        newdevilFruit._id = id;
        const updatedevilFruit = await devilFruit.findByIdAndUpdate(id, newdevilFruit, {
            new:true
        });
        return res.status(201).json(updatedevilFruit);
    } catch (error) {
        return res.status(400).json("Ha fallado al peticion en put");
    }
};

const deletedevilFruit = async (req,res,next) => {
    try {
        const { id } = req.params;
        const deletedevilFruit = await devilFruit.findByIdAndDelete(id);
        return res.status(201).json(deletedevilFruit);
    } catch (error) {
        return res.status(400).json("Ha fallado al peticion en delete");
    }
};

const getdevilFruitsById = async (req,res,next) => {
    try {
        const { id } = req.params;
        const devilFruitById = await devilFruit.findById(id);
        return res.status(200).json(devilFruitById);
    } catch (error) {
        return res.status(400).json("Ha fallado al peticion en getById");
    }
};

const getdevilFruitsByCrew = async (req,res,next) => {
    try {
        const { crew } = req.params;
        const devilFruitByCrew = await devilFruit.find({ crew });
        return res.status(200).json(devilFruitByCrew);
    } catch (error) {
        return res.status(400).json("Ha fallado al peticion en getByCrew");
    }

}

module.exports = { getdevilFruits,postdevilFruit,updatedevilFruit,getdevilFruitsById,getdevilFruitsByCrew,deletedevilFruit }