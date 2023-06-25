import { Router } from "express";
import { usersCreate, usersSignIn } from "../controller/users-controller";
import { verifyUser, verifyUserSignIn } from "../service/users-service";
import { createUser } from "../repositories/users-repositories";

const usersRouter = Router();

usersRouter.post('/sign-up', usersCreate, verifyUser, createUser);
usersRouter.post('/sign-in', usersSignIn, verifyUserSignIn);

export { usersRouter };