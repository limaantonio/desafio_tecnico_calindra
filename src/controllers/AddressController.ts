import { Request, Response, NextFunction } from 'express';
//import AddressModel from '../models/AddressModel';
import { getDistanceTwoPoint } from '../services/ApiGeoapify';

class AddressController {
  async index(request: Request, response: Response) {
    
    return response.json("API Coordinate");
  }

  async create(request: Request, response: Response) {
    const addresses = request.body;

    const distance = await getDistanceTwoPoint(addresses)

    return response.json({"Distancia": distance});
  }
}

export { AddressController };
