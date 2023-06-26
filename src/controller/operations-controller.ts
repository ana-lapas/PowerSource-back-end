import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { notFoundError } from '../errors';
import { getOperations } from '../service/operations-service';

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
