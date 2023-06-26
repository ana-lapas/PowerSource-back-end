import { unauthorizedError } from '../errors/unautorized-error';
import { notFoundError } from '../errors/not-found-error';
import { createProducts, findProducts } from '../repositories/products-repositories';
import { Product } from '../protocol';
import { conflictError } from '../errors/conflict-error';

export async function getProducts() {
    const products = await findProducts();
    if (!products) {
        throw notFoundError("There's no information availabel");
    }
    return products;
}

export async function postProducts({ userId, font, month, energy_amount, price }: Product) {
    const productsData = { userId, font, month, energy_amount, price};
    const newProduct = await createProducts(productsData);
    if(!newProduct) {
        throw conflictError("there was a conflict about the information provided")
    }
    return ({id: newProduct.id});
}

