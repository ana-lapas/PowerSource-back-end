import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { verifyUser, verifyUserSignIn } from '../service/users-service';
import { User } from '@/protocol';

export async function usersCreate(req: Request, res: Response) {
  const { name, cpf, email, password } = req.body as User;

  try {
    const user = await verifyUser({  name, cpf, email, password });
    return res.status(httpStatus.CREATED);
  } catch (error) {
    if (error.name === 'Conflict Error') {
      return res.status(httpStatus.CONFLICT).send(error);
    }
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}

export async function usersSignIn(req: Request, res: Response) {
  const { email, password } = req.body as User;

  try {
    const user = await verifyUserSignIn({ email, password });
    return res.status(httpStatus.CREATED).send({user});
  } catch (error) {
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}
