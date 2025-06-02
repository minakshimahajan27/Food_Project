import express from 'express';
import mongoose from 'mongoose';
import cors from "cors";
import { Reservation } from './models/User.js';

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://minakshi27mahajan:minakshi%40123@cluster0.fhaqdfx.mongodb.net/",
  { dbName: "Food_Product" }
)
.then(() => console.log("MongoDB connected"))
.catch((err) => console.log("MongoDB error:", err));


app.post('/api/reservation', async (req, res) => {
  try {
    const reservation = new Reservation(req.body);
    const savedReservation = await reservation.save();
    res.json({
      message: "Your form has been submitted",
      reservation: savedReservation,
      success: true
    });
  } catch (error) {
    console.error("Error saving reservation:", error);
    res.status(500).json({ message: "Error saving reservation", success: false });
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
