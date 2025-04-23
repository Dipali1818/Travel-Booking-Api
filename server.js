import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import bookingRoutes from './routes/bookingRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json()); // Parse incoming JSON

connectDB();

app.use('/api/bookings', bookingRoutes); // ✅ This must be defined

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
