import express from "express";
import dotenv from "dotenv"
import authRoutes from "./routes/auth.route.js";
import { connectDB } from "./lib/db.js";
import messageRoutes from "./routes/message.route.js"
import cookieParser from "cookie-parser"
import cors from "cors"
import { app, server } from "./lib/socket.js";
import path from "path"

dotenv.config()

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))

const __dirname = path.resolve();
const PORT= process.env.PORT

app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRoutes)

if(process.env.NODE_ENV==="production"){
    app.use(express.static(path.join(__dirname, "../frontend/dist")));

    // Catch-all handler: must be after all other routes
    app.use((req, res, next) => {
        // Skip if it's an API route
        if (req.path.startsWith("/api")) {
            return next();
        }
        // Skip if it's a static file request
        if (req.path.includes(".") && !req.path.endsWith(".html")) {
            return next();
        }
        res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
    })
}



server.listen(PORT,()=>{
    console.log("Server is running on port " , PORT);
    connectDB()    
})