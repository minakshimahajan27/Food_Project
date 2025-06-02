import mongoose from "mongoose";

const reservationSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  date: {
    type: String
  },
  time: {
    type: String
  }
});

export const Reservation = mongoose.model("Reservation", reservationSchema);
