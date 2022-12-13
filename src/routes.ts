import { Router } from 'express';
import { RoutesController } from './controllers/RoutesController';

const routes = Router();
const addressController = new RoutesController();

routes.get('/', addressController.index);
routes.post('/address', addressController.calculate_distance);

export { routes };
