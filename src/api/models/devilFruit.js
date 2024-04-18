const mongoose = require('mongoose');

const devilFruitSchema = new mongoose.Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    description: { type: String, required: true }
}, {
    timestamps: true,
    collection: "devilFruits"
});

const devilFruit = mongoose.model('devilFruits', devilFruitSchema, "devilFruits");
module.exports = devilFruit