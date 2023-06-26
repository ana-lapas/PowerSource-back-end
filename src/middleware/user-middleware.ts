import jwt from 'jsonwebtoken';
import { findUserById } from '../repositories/users-repositories';
import { unauthorizedError } from '../errors/unautorized-error';
import { Request, Response, NextFunction } from 'express';
import httpStatus = require('http-status');

type AuthorizationType = {
    userId: number
}
type AuthenticatedUserRequest = Request & AuthorizationType;

export async function checkJWT(req: AuthenticatedUserRequest, res: Response, next: NextFunction) {
    const { authorization } = req.headers;

    if(!authorization) throw unauthorizedError("You should be logged in to make this request"); 

    const parts = authorization.split(" ");
    if(parts.length !== 2) throw unauthorizedError("You should be logged in to make this request");

    const [schema, token] = parts;
    if(schema !== 'Bearer') throw unauthorizedError("You should be logged in to make this request");

    try {
        const verifyToken: any = jwt.verify(token, process.env.SECRETKEY_JWT)

        const user = await findUserById(verifyToken.userId)

        if(!user) throw unauthorizedError("You should be logged in to make this request");

        res.locals.userId = user.id;

        return next();
    } catch (error) {
        return res.status(httpStatus.BAD_REQUEST).send(error);
    }
}