import { Product } from './../protocol';
import { getProducts, postProducts } from '../service/products-service';
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { notFoundError } from '../errors';

export async function loadProducts(req: Request, res: Response) {
  try {
    const products = await getProducts();
    if(!products) throw notFoundError("There are no products on our database")
    return res.status(httpStatus.OK).send(products);
  } catch (error) {
    if (error.name === 'Not found Error') {
      return res.status(httpStatus.NOT_FOUND).send(error);
    }
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}

export async function insertProducts(req: Request, res: Response) {
  const userId = res.locals.userId;
  const { font, month, energy_amount, price} = req.body as Product;
  try {
    const products = await postProducts({userId, font, month, energy_amount, price});
    return res.sendStatus(httpStatus.OK).send(products.id);
  } catch (error) {
    return res.sendStatus(httpStatus.BAD_REQUEST).send(error);
  }
}