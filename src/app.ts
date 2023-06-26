import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { usersRouter } from "./routers/users-router";
import { productsRouter } from "./routers/products-router";
import { connectDb } from "./config/database";
import { Express } from "express";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.get('/health', (_req, res) => res.send('OK!'))
app
    .use('/auth', usersRouter)
    .use('/products', productsRouter)

const port: number = 5000 || Number(process.env.PORT);
connectDb();

app.listen(port, () => console.log(`Server is runnin on port ${port}`));