import { prisma } from "../config/database";
import { users } from "@prisma/client";

type CreateUser = Omit<users, "id">;

export async function createUser(userData: CreateUser) {
    return await prisma.users.create({
        data: userData
    });
}

export async function findUserByCPF(cpf: string) {
    return await prisma.users.findFirst({
        where: {
            cpf,
        }
    })
}

export async function findUserByEmail(email: string) {
    return await prisma.users.findUnique({
        where: {
            email
        }
    })
}

export async function findUserById(userId: number) {
    return await prisma.users.findUnique({
        where: {
            id: userId,
        }
    })
}