import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true
  },
  destination: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  }
});

export default mongoose.model('Booking', bookingSchema);
