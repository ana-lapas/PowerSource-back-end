import { getProducts } from '../service/products-service';
import { Request, Response } from 'express';
import httpStatus from 'http-status';

export async function loadProducts(req: Request, res: Response) {
  try {
    const products = await getProducts();
    return res.status(httpStatus.OK).send(products);
  } catch (error) {
    if (error.name === 'Not found Error') {
      return res.status(httpStatus.NOT_FOUND).send(error);
    }
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}
