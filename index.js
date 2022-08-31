import express from "express";
import mongoose from 'mongoose';
import 'dotenv/config';
import routeBrands from "./routes/brands.js";
import bodyParser from 'body-parser';

const app = express();
const PORT = 5000;

// Middlewares
app.use(bodyParser.json());

// MongoDB
const monConn = mongoose.connect(process.env.DBLINK, () => console.log("Connected to MongoDB"));

// ROUTES Middleware
app.get('/', (req, res)=>{
    res.send({message: "Here is the index Route!"})
})

app.use('/conn', routeBrands)


// Run the server
app.listen(PORT, ()=>{console.log(`App running on port ${PORT}`)})
