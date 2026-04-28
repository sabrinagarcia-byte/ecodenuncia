import express from 'express';
import userRoutes from './routes/userRoutes.js';

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use(userRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
});