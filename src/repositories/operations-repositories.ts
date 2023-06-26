import { NewOperation } from "../protocol";
import { prisma } from "../config/database";
import { operation } from "@prisma/client";

export async function findOperationsByClientId(userId: number) {
    return await prisma.operation.findMany({
        where: {
            seller_id: userId
        }
    })
}

export async function createOperation(productsData: NewOperation) {
    return await prisma.operation.create({
        data: {
            product_id: productsData.product_id,
            seller_id: productsData.seller_id,
            buyer_id: productsData.buyer_Id,
            quantity: productsData.quantity,
            price: productsData.price,
        }
    })
}
