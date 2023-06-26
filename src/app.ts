import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { usersRouter } from "./routers/users-router";
import { productsRouter } from "./routers/products-router";
import { connectDb, disconnectDB } from "./config/database";
import { Express } from "express";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.get('/health', (_req, res) => res.send('OK!'))
app
    .use('/auth', usersRouter)
    .use('/products', productsRouter)

const PORT = 5000;
//connectDb();

export function init(): Promise<Express> {
    connectDb();
    return Promise.resolve(app);
  }
  
  export async function close(): Promise<void> {
    await disconnectDB();
}
app.listen(PORT, () => console.log(`Server is runnin on port ${PORT}`));