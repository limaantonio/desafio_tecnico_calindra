import { Router} from 'express';
import { AddressController } from './controllers/AddressController';

const routes = Router();
const addressController = new AddressController();

routes.get('/', addressController.index)
routes.post('/address', addressController.create);
//routes.get('/address', addressController.list);

export { routes };
