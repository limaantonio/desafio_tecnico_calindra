import { Request, Response } from 'express';
import { Graph } from '../entities/Graph';
import { ListRoutes } from '../entities/ListRoutes';
import {
  getSmallerDistance,
  getGreaterDistance,
} from '../services/RoutesService';

class RoutesController {
  async index(request: Request, response: Response) {
    return response.status(200).send('API GEOCODING');
  }

  async calculate_distance(request: Request, response: Response) {
    const addresses = request.body;

    var graph = new Graph(addresses.length);
    await graph.setEdges(addresses);

    try {
      var listRoutes = new ListRoutes(
        graph.getEdges(),
        getSmallerDistance(graph.getEdges()),
        getGreaterDistance(graph.getEdges()),
      );
    } catch (err) {
      console.error(err);
      return response.status(400).send(err);
    }

    return response.status(200).json({
      listRoutes,
    });
  }
}

export { RoutesController };
