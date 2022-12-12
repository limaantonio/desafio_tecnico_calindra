import { Request, Response, NextFunction } from 'express';
import { Edge } from '../entities/Edge';
import { getSmallerDistance, makeGraph } from '../services/ApiGeoapify';

class AddressController {
  async index(request: Request, response: Response) {
    return response.json('API Coordinate');
  }

  async calculate_distance(request: Request, response: Response) {
    const addresses = request.body;

    var listDistance = new Array<Edge>();
    listDistance = await makeGraph(addresses);

    getSmallerDistance(listDistance);

    return response.json(listDistance);
  }
}

export { AddressController };
