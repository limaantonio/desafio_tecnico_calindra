import { Request, Response, NextFunction } from 'express';
import { Address } from '../entities/Address';
//import AddressModel from '../models/AddressModel';
import { getLatitudeLogitude } from '../services/ApiGeoapify';

class AddressController {
  async create(request: Request, response: Response, next: NextFunction) {
    const addresses = request.body;

    const coordinates = await Promise.all(addresses.map(getLatitudeLogitude));

    return response.json(coordinates);
  }

  // async list(request: Request, response: Response) {
  //   const res = await fetch(
  //     `https://api.geoapify.com/v1/geocode/search?name=${address.place_name}&
  //      housenumber=1&street=Av.%20Rio%20Branco&postcode=20090003&city=Rio%20de%20Janeiro&state=RJ&country=Brazil&format=json&apiKey=28d602d627cb411d988f5a9790dcefdf`,
  //   );
  //   //28d602d627cb411d988f5a9790dcefdf

  //   const app = await res.json();

  //   return response.json(app);
  // }
}

export { AddressController };
