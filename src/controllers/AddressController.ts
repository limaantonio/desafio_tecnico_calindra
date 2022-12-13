import { Request, Response } from 'express';
import { Graph } from '../entities/Graph';
import { ListRoutes } from '../entities/ListRoutes';
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

    var listDistance = new Graph(addresses.length);
    listDistance = await makeGraph(addresses);

    var listRoutes = new ListRoutes(
      listDistance.getEdges(),
      getSmallerDistance(listDistance),
      getGreaterDistance(listDistance),
    );

    return response.status(200).json({
      listRoutes,
    });
  }
}

export { AddressController };
