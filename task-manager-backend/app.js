import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import taskRoutes from './routes/taskRoutes.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;


// Ajoute cette ligne avant tes routes
app.use(cors({
    origin: 'http://localhost:5173' // Remplace par l'origine de ton frontend, si nécessaire
  }));

app.use(express.json());

app.use('/api/tasks', taskRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('MongoDB connection error:', error));



app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
