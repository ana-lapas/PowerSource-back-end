import { notFoundError } from '../errors/not-found-error';
import { createProducts, findProducts } from '../repositories/products-repositories';
import { NewOperation, Product } from '../protocol';
import { findOperationsByClientId, createOperation } from '../repositories/operations-repositories';
import { conflictError } from '../errors/conflict-error';

export async function getOperations(userId: number) {
    const operations = await findOperationsByClientId(userId);
    if (!operations) throw notFoundError("There's no information availabel");
    return operations;
}

export async function postOperations({ buyer_Id, product_id, seller_id, quantity, price} : NewOperation) {
    const productsData = { buyer_Id, product_id, seller_id, quantity, price};
    const NewOperation = await createOperation(productsData);
    if (!NewOperation) { throw conflictError("There was an error about the information provided");}
    return ({id: NewOperation.id});
}

