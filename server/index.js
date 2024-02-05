import express from "express";
import Connection from "./database/db.js";
import dotenv from 'dotenv';
import router from "./routes/routes.js";

const app=express();
const PORT='8000'


dotenv.config();


app.use('/',router)
app.listen(PORT, ()=>{console.log(`server is running on PORT ${PORT}`)})

const USERNAME= process.env.DB_NAME;
const PASSWORD= process.env.DB_PASSWORD;
Connection(USERNAME, PASSWORD);