import { notFoundError } from '../errors/not-found-error';
import { findProducts } from '../repositories/products-repositories';

export async function getProducts() {
    const products = await findProducts();
    if(!products){ throw notFoundError("There's no information availabel"); }
    return products;
}
