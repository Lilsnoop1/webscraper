import express from "express";
import bodyParser from "body-parser";
import sportsRouter from "./Routes/sports.js";
import "dotenv/config";
import mongoose from "mongoose";
const app = express();

//middleware
// app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json())
//router
app.use("/sports",sportsRouter);

//connect to db
mongoose.connect("mongodb+srv://biggertest:smoltest@cluster0.vuzjvhx.mongodb.net/WebscrapingDB");

app.listen(process.env.PORT,(req,res)=>{
    console.log("hello");
})