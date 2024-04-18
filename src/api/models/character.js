const mongoose = require("mongoose");

const characterSchema = new mongoose.Schema({
    img: { type: String, riquered: true },
    name: { type: String, riquered: true  },
    type: { type: String, required: true  },
    crew: { type: String, required: true },
    status: {type: String, required: true},
    devilFruit: { type: mongoose.Schema.Types.ObjectId, ref: 'devilFruits', required:false }

},{
    timestamps: true,
    collection:"characters",
});



const Character = mongoose.model("characters", characterSchema, "characters");


module.exports = Character;