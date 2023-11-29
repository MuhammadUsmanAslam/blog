const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log(`Connection to MongoDB is successful`);
    } catch (error) {
        console.log(`Connection to MongoDB is unsuccessful with Error: ${error}`);
    }
}

module.exports = connectDB;