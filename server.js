import express from "express";
import todoRouter from './routes/todo.js'
import 'dotenv/config';
import { connectDB } from './database/dbConnect.js'
import cors from 'cors';
import { apiPath } from "./utils/endPoints.js";


const server = express()

// db
connectDB()

// Using Middlewares
server.use(express.json());
server.use(
    cors({
      origin: [process.env.FRONTEND_URL],
      methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
      credentials: true,
    })
  );
// routes
server.use('/api/todo', todoRouter)

server.get('/api', (req, res) => {
    res.status(200).json({
        path: apiPath
    })
})


server.listen(process.env.PORT,()=>{
  console.log("Server started..")
})

