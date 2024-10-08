import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();
import mongoConnect from './utils/db';
import imageRoutes from './routes/imageRoute';

const app = express();
const PORT = process.env.PORT || 3030;
app.use(cors({
   origin: 'http://127.0.0.1:5500'}));


app.use(express.json());

// Connect to MongoDB
mongoConnect();

// Routes
app.use('/api/images', imageRoutes);

export default app;
