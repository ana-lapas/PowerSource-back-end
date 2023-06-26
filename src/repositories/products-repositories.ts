import { Product } from "./../protocol";
import { prisma } from "../config/database";
import { products } from "@prisma/client";

export async function findProducts() {
    return await prisma.products.findMany();
}

export async function createProducts({ fromWhere, month, energy_amount, price }: Product) {
    return await prisma.products.create({
        data: {
            energy_amount,
            price,
            font: fromWhere,
            month,
            available: true,
        }
    });
}

