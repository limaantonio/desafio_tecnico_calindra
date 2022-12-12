import { Request, Response, NextFunction } from 'express';
import { Edge } from '../entities/Edge';
import {
  getSmallerDistance,
  getGreaterDistance,
  makeGraph,
} from '../services/ApiGeoapify';

class AddressController {
  async index(request: Request, response: Response) {
    return response.status(200).send('API Coordinate');
  }

  async calculate_distance(request: Request, response: Response) {
    const addresses = request.body;

    var listDistance = new Array<Edge>();
    listDistance = await makeGraph(addresses);

    const smallerDistance = getSmallerDistance(listDistance);
    const greaterDistance = getGreaterDistance(listDistance);

    return response.status(200).json({
      listDistance: listDistance,
      smallerDistance: smallerDistance.distance,
      greaterDistance: greaterDistance.distance,
    });
  }
}

export { AddressController };
