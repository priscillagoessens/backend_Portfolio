import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB } from './config/db.js';
import projetRoutes from './routes/projet.route.js';

dotenv.config();


const app = express();
const PORT = process.env.PORT || 5000


app.use(express.json());

// // Configure CORS
app.use(cors({
    origin: 'http://localhost:3000', // Remplacez par l'URL de votre frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
  }));

// API routes
app.use("/api/projets", projetRoutes)

app.listen(5000,() => {
    connectDB();
    console.log('Listening on port ' + PORT);
})