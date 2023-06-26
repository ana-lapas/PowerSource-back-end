import { checkJWT } from "../middleware/user-middleware";
import { insertProducts, loadProducts } from "../controller/products-controller";
import { createProducts, findProducts } from "../repositories/products-repositories";
import { getProducts, postProducts } from "../service/products-service";
import express from "express";

const productsRouter = express.Router();

productsRouter.get('/', loadProducts, getProducts, findProducts);
productsRouter.post('/create', checkJWT, insertProducts, postProducts, createProducts);

export { productsRouter };