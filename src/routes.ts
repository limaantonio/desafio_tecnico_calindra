import { Router, Request, Response } from 'express';
import { AddressController } from './controllers/AddressController';

const routes = Router();
const addressController = new AddressController();

routes.post('/address', addressController.create);
//routes.get('/address', addressController.list);

export { routes };
