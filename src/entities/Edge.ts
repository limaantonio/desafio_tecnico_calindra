import { Address } from './Address';

class Edge {
  origin?: Address;
  destiny?: Address;
  distance: number;

  constructor() {
    this.origin = new Address();
    this.destiny = new Address();
    this.distance = 0;
  }
}

export { Edge };
