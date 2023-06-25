import { prisma } from "../config/database";
import { products } from "@prisma/client";

export async function findProducts() {
    return await prisma.products.findMany();
}
