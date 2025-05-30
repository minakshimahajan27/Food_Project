import express from 'express';
import mongoose from 'mongoose';
import cors from "cors";
const app=express();
// import dotenv from 'dotenv'
app.use(cors());
app.use(express.json());
mongoose.connect(
    "mongodb+srv://minakshi27mahajan:minakshi%40123@cluster0.fhaqdfx.mongodb.net/",{
        dbName:"Food_Product"
    }
)
.then(()=>console.log("mongodb connect"))
.catch((err)=>console.log(err));

//Schema
const Reservation=mongoose.model("Reservation",{
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  date: String,
  time: String
})
app.post('/api/reservation', async (req, res) => {
  try {
    const data = new Reservation(req.body);
    await data.save();
    res.status(201).send("Reservation saved");
  } catch (error) {
    res.status(500).send("Error saving reservation");
  }
});
const port=3000;

app.listen(port,()=>{
    console.log("server is working")
})