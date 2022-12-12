import { Router } from 'express';
import { AddressController } from './controllers/AddressController';

const routes = Router();
const addressController = new AddressController();

routes.get('/', addressController.index);
routes.post('/address', addressController.calculate_distance);

export { routes };
