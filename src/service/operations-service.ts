import { notFoundError } from '../errors/not-found-error';
import { findOperationsByClientId } from '../repositories/operations-repositories';

export async function getOperations(userId: number) {
    const operations = await findOperationsByClientId(userId);
    if (!operations) throw notFoundError("There's no information availabel");
    return operations;
}
