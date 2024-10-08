import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const mongoConnect = async () => {
    // Set strictQuery option
    mongoose.set('strictQuery', false); // or true based on your preference

    try {
        if (!process.env.DB_URL) {
            throw new Error('Database URL not found in .env file');
        }
        const connection = await mongoose.connect(process.env.DB_URL);
        console.log('DB connected successfully');
        return connection;
    } catch (error) {
        console.error('Connection to DB failed: ', (error as Error).message);
    }
};

export default mongoConnect;
