import Booking from '../models/Booking.js';

export const bookDestination = async (req, res) => {
  try {
    const { user, destination, date } = req.body;
    const booking = new Booking({ user, destination, date });
    await booking.save();
    res.status(201).json({ message: 'Booking successful', booking });
  } catch (error) {
    res.status(500).json({ message: 'Booking failed', error: error.message });
  }
};

export const getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.status(200).json({ message: 'All bookings retrieved', bookings });
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving bookings', error: error.message });
  }
};
