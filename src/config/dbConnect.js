import mongoose from "mongoose";

async function conectaInDataBase() {
    mongoose.connect("mongodb+srv://admin:admin123@cluster0.cs5ekdh.mongodb.net/?retryWrites=true&w=majority")

    return mongoose.connection;
};

export default conectaInDataBase;