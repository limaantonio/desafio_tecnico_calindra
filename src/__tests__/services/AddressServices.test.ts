import { describe, expect, test } from '@jest/globals';
import { Graph } from '../../entities/Graph';
import {
  getLatitudeLogitude,
  getDistanceTwoPoint,
  getSmallerDistance,
  getGreaterDistance,
} from '../../services/ApiGeoapify';

const listDistance = [
  {
    origin: {
      place_name: 'A',
      street: 'Av. Rio Branco',
      housenumber: 1,
      postcode: '20090003',
      city: 'Rio de Janeiro',
      neighborhood: 'Centro',
      state: 'RJ',
      country: 'Brasil',
      lat: -22.89750765,
      lon: -43.18020490826943,
    },
    destiny: {
      place_name: 'B',
      street: 'Rua Horacio Fontenele Magalhaes',
      housenumber: 329,
      postcode: '62300-000',
      city: 'Viçosa do Ceará',
      neighborhood: 'Northeast',
      state: 'CE',
      country: 'Brasil',
      lat: -3.561473,
      lon: -41.091586,
    },
    distance: 2763.882,
  },
  {
    origin: {
      place_name: 'A',
      street: 'Av. Rio Branco',
      housenumber: 1,
      postcode: '20090003',
      city: 'Rio de Janeiro',
      neighborhood: 'Centro',
      state: 'RJ',
      country: 'Brasil',
      lat: -22.89750765,
      lon: -43.18020490826943,
    },
    destiny: {
      place_name: 'C',
      street: 'Rua Horacio Fontenele Magalhaes',
      housenumber: 'SN',
      postcode: '62300-000',
      city: 'Viçosa do Ceará',
      neighborhood: 'Northeast',
      state: 'CE',
      country: 'Brasil',
      lat: -3.561013,
      lon: -41.090133,
    },
    distance: 2764.052,
  },
  {
    origin: {
      place_name: 'A',
      street: 'Av. Rio Branco',
      housenumber: 1,
      postcode: '20090003',
      city: 'Rio de Janeiro',
      neighborhood: 'Centro',
      state: 'RJ',
      country: 'Brasil',
      lat: -22.89750765,
      lon: -43.18020490826943,
    },
    destiny: {
      place_name: 'D',
      street: 'Rua Horacio Fontenele Magalhaes',
      housenumber: 'SN',
      postcode: '62300-000',
      city: 'Viçosa do Ceará',
      neighborhood: 'Northeast',
      state: 'CE',
      country: 'Brasil',
      lat: -3.561013,
      lon: -41.090133,
    },
    distance: 2764.052,
  },
  {
    origin: {
      place_name: 'B',
      street: 'Rua Horacio Fontenele Magalhaes',
      housenumber: 329,
      postcode: '62300-000',
      city: 'Viçosa do Ceará',
      neighborhood: 'Northeast',
      state: 'CE',
      country: 'Brasil',
      lat: -3.561473,
      lon: -41.091586,
    },
    destiny: {
      place_name: 'C',
      street: 'Rua Horacio Fontenele Magalhaes',
      housenumber: 'SN',
      postcode: '62300-000',
      city: 'Viçosa do Ceará',
      neighborhood: 'Northeast',
      state: 'CE',
      country: 'Brasil',
      lat: -3.561013,
      lon: -41.090133,
    },
    distance: 0.169,
  },
  {
    origin: {
      place_name: 'B',
      street: 'Rua Horacio Fontenele Magalhaes',
      housenumber: 329,
      postcode: '62300-000',
      city: 'Viçosa do Ceará',
      neighborhood: 'Northeast',
      state: 'CE',
      country: 'Brasil',
      lat: -3.561473,
      lon: -41.091586,
    },
    destiny: {
      place_name: 'D',
      street: 'Rua Horacio Fontenele Magalhaes',
      housenumber: 'SN',
      postcode: '62300-000',
      city: 'Viçosa do Ceará',
      neighborhood: 'Northeast',
      state: 'CE',
      country: 'Brasil',
      lat: -3.561013,
      lon: -41.090133,
    },
    distance: 0.169,
  },
  {
    origin: {
      place_name: 'C',
      street: 'Rua Horacio Fontenele Magalhaes',
      housenumber: 'SN',
      postcode: '62300-000',
      city: 'Viçosa do Ceará',
      neighborhood: 'Northeast',
      state: 'CE',
      country: 'Brasil',
      lat: -3.561013,
      lon: -41.090133,
    },
    destiny: {
      place_name: 'D',
      street: 'Rua Horacio Fontenele Magalhaes',
      housenumber: 'SN',
      postcode: '62300-000',
      city: 'Viçosa do Ceará',
      neighborhood: 'Northeast',
      state: 'CE',
      country: 'Brasil',
      lat: -3.561013,
      lon: -41.090133,
    },
    distance: 0,
  },
];

describe('Test the services', () => {
  test('It should return address with lat and lon', async () => {
    const data = await getLatitudeLogitude({
      place_name: 'A',
      street: 'Av. Rio Branco',
      housenumber: '1',
      postcode: '20090003',
      city: 'Rio de Janeiro',
      neighborhood: 'Centro',
      state: 'RJ',
      country: 'Brasil',
      lat: '',
      lon: '',
    });
    expect(data).toEqual({
      place_name: 'A',
      street: 'Av. Rio Branco',
      housenumber: '1',
      postcode: '20090003',
      city: 'Rio de Janeiro',
      neighborhood: 'Centro',
      state: 'RJ',
      country: 'Brasil',
      lat: -22.89750765,
      lon: -43.18020490826943,
    });
  });

  test('It should return the distance between two points', async () => {
    jest.setTimeout(50000);
    const a = {
      place_name: 'A',
      street: 'Av. Rio Branco',
      housenumber: '1',
      postcode: '20090003',
      city: 'Rio de Janeiro',
      neighborhood: 'Centro',
      state: 'RJ',
      country: 'Brasil',
      lat: '-22.89750765',
      lon: '-43.18020490826943',
    };

    const b = {
      place_name: 'B',
      street: 'Rua Horacio Fontenele Magalhaes',
      housenumber: '329',
      postcode: '62300-000',
      city: 'Viçosa do Ceará',
      neighborhood: 'Northeast',
      state: 'CE',
      country: 'Brasil',
      lat: '-3.561473',
      lon: '-41.091586',
    };
    const data = await getDistanceTwoPoint(a, b);
    expect(data).toBe(2763882);
  });

  test('It should return the list distance between addresses', async () => {
    jest.setTimeout(50000);
    const addresses = [
      {
        place_name: 'A',
        street: 'Av. Rio Branco',
        housenumber: 1,
        postcode: '20090003',
        city: 'Rio de Janeiro',
        neighborhood: 'Centro',
        state: 'RJ',
        country: 'Brasil',
        lat: '-22.89750765',
        lon: '-43.18020490826943',
      },
      {
        place_name: 'B',
        street: 'Rua Horacio Fontenele Magalhaes',
        housenumber: 329,
        postcode: '62300-000',
        city: 'Viçosa do Ceará',
        neighborhood: 'Northeast',
        state: 'CE',
        country: 'Brasil',
        lat: '-3.561473',
        lon: '-41.091586',
      },
    ];
    const graph = new Graph(addresses.length);
    const data = await graph.setEdges(addresses);
    expect(data.getEdges()[0].distance).toEqual(2763.882);
  });

  test('It should return the smaller distance in list of distances', async () => {
    const response = await getSmallerDistance(listDistance);
    expect(response.distance).toEqual(0);
  });

  test('It should return the greater distance distance in list of distances', async () => {
    jest.setTimeout(50000);
    const response = await getGreaterDistance(listDistance);
    expect(response.distance).toEqual(2764.052);
  });

  test('It should return address with error', async () => {
    try {
      await getLatitudeLogitude({
        place_name: 'A',
        street: 'Av. Rio Branco',
        housenumber: '1',
        postcode: '20090003',
        city: 'Rio de Janeiro',
        neighborhood: 'Centro',
        state: 'RJ',
        country: 'Brasil',
        lat: '',
        lon: '',
      });
    } catch (error) {
      expect(error).toBe(error);
    }
  });
});
