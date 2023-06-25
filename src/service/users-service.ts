import { Request, Response } from 'express';
import { User, SignInUser } from '@/protocol';
import { createUser, findUserByCPF, findUserByEmail } from "../repositories/users-repositories";
import { conflictError } from '../errors';
import { missingInformationError } from '../errors/missing-information-error';
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv/config";

export async function verifyUser({ name, password, cpf, email }: User) {
    if (!name || !password || !cpf || !email) {
        throw missingInformationError('There is a missing information');
    }
    const existingUser = await findUserByCPF(cpf);
    if (!existingUser) {
        throw conflictError("There was a conflict about the information provided");
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await createUser({ name, password: hashedPassword, cpf, email });
    return ({
        email: newUser.email
    });
}

export async function verifyUserSignIn({ email, password }: SignInUser) {
    if (!email || !password) {
        throw missingInformationError('There is a missing information');
    }

    const user = await findUserByEmail(email);
    if (!user) {
        throw conflictError("There was a conflict about the information provided");
    }

    const verifyPassword = await bcrypt.compare(password, user.password);
    if (!verifyPassword) {
        throw conflictError("There was a conflict about the information provided");
    }

    const token = jwt.sign({userId: user.id}, process.env.SECRETKEY_JWT, {expiresIn: 86400});

    return token;
}