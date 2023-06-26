import { NewOperation, Product } from '../protocol';
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { notFoundError } from '../errors';
import { getOperations, postOperations } from '../service/operations-service';

export async function loadOperations(req: Request, res: Response) {
  const userId = res.locals.userId;
  try {
    const operations = await getOperations(userId);
    if(!operations) throw notFoundError("There are no operations on our database")
    return res.status(httpStatus.OK).send(operations);
  } catch (error) {
    if (error.name === 'Not found Error') {
      return res.status(httpStatus.NOT_FOUND).send(error);
    }
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}

export async function insertOperation(req: Request, res: Response) {
  const buyer_Id: number = res.locals.userId;
  const { product_id, seller_id, quantity, price} = req.body as NewOperation;
  try {
    const products = await postOperations({buyer_Id, product_id, seller_id, quantity, price});
    return res.sendStatus(httpStatus.OK).send(products.id);
  } catch (error) {
    return res.sendStatus(httpStatus.BAD_REQUEST).send(error);
  }
}