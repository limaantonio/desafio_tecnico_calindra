import { Edge } from './Edge';

class ListRoutes {
  routes: Array<Edge>;
  smallerDistance: Edge;
  greaterDistance: Edge;

  constructor(
    routes: Array<Edge>,
    smallerDistance: Edge,
    greaterDistance: Edge,
  ) {
    this.routes = routes;
    this.smallerDistance = smallerDistance;
    this.greaterDistance = greaterDistance;
  }
}

export { ListRoutes };
