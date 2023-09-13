import mongoose from "mongoose";

async function conectaInDataBase() {
    mongoose.connect(process.env.DB_CONNECTION_STRING);

    return mongoose.connection;
};

export default conectaInDataBase;