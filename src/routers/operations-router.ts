import { checkJWT } from "../middleware/user-middleware";
import { insertOperation, loadOperations } from "../controller/operations-controller";
import express from "express";
import { findOperationsByClientId } from "../repositories/operations-repositories";
import { getOperations } from "../service/operations-service";

const operationsRouter = express.Router();

operationsRouter.get('/', checkJWT, loadOperations, getOperations, findOperationsByClientId);
operationsRouter.post('/create', checkJWT, insertOperation, );

export { operationsRouter };