import { Address } from './Address';

class Edge {
  origin: Address;
  destiny: Address;
  distance: number;

  constructor(origin: Address, destiny: Address, distance: number) {
    this.origin = origin;
    this.destiny = destiny;
    this.distance = distance;
  }
}

export { Edge };
