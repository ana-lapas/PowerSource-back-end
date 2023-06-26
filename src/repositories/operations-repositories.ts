
import { prisma } from "../config/database";
import { operation } from "@prisma/client";

export async function findOperationsByClientId(userId: number) {
    return await prisma.operation.findMany({
        where: {
            seller_id: userId
        }
    })
}
