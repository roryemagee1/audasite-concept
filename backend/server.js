import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
dotenv.config();

import cors from 'cors';
const corsOptions = { allowedOrigin: 'http://localhost:5173' };
const port = process.env.PORT || 3000;

const app = express();

// Middleware: CORS Options, JSON Body Parser, URL Body Parser, and Cookie Parser
app.use(cors(corsOptions), express.json(), express.urlencoded({ extended: true }), cookieParser());


app.get('/api', (req, res) => {
  res.status(201).send({ message: "Server is on!" })
})

const __dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/dist")));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"))
  })
} else {
  app.get('/', (req, res) => {
    res.send("API is running on dev server...");
  })
}

app.listen(port, () => console.log(`Server is running on port ${port}`));