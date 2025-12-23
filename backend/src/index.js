import express from "express";
import dotenv from "dotenv"
import authRoutes from "./routes/auth.route.js";
import { connectDB } from "./lib/db.js";
import messageRoutes from "./routes/message.route.js"

const app=express();
app.use(express.json())

app.use("/api/auth",authRoutes)
app.use("/api/message",messageRoutes)


dotenv.config()
const PORT= process.env.PORT
app.listen(PORT,()=>{
    console.log("Server is running on port " , PORT);
    connectDB()    
})