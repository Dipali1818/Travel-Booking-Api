import express from 'express';
import { bookDestination, getBookings } from '../controllers/bookingController.js';

const router = express.Router();

router.post('/', bookDestination); // POST /api/bookings
router.get('/', getBookings);      // GET /api/bookings

export default router;
