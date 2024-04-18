const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log("bbdd funcionando");
    } catch (error) {
        console.log("la bbdd esta cagada");
    }


}


module.exports = { connectDB }