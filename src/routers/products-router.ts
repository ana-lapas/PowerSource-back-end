import { loadProducts } from "../controller/products-controller";
import { findProducts } from "../repositories/products-repositories";
import { getProducts } from "../service/products-service";
import { Router } from "express";

const productsRouter = Router();

productsRouter.get('/', loadProducts, getProducts, findProducts);

export { productsRouter };