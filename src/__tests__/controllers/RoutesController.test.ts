import { describe, expect, test } from '@jest/globals';
import request from 'supertest';
import { routes } from '../../routes';

describe('Test the endpoint calculate distance', () => {
  test('It should response the POST method with the list of distances', async () => {
    jest.setTimeout(50000);

    request(await routes)
      .post('/routes')
      .send({
        address: [
          {
            place_name: 'A',
            street: 'Av. Rio Branco',
            housenumber: 1,
            postcode: '20090003',
            city: 'Rio de Janeiro',
            neighborhood: 'Centro',
            state: 'RJ',
            country: 'Brasil',
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
          },
          {
            place_name: 'C',
            street: 'Rua Horacio Fontenele Magalhaes',
            housenumber: 'SN',
            postcode: '62300-000',
            city: 'Viçosa do Ceará',
            neighborhood: 'Northeast',
            state: 'CE',
            country: 'Brasil',
          },
        ],
      })
      .then(response =>
        expect(response.body).toBe({
          listRoutes: {
            routes: [
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
                distance: 2763.882,
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
                distance: 2764.052,
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
                distance: 0.169,
              },
            ],
            smallerDistance: {
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
              distance: 0.169,
            },
            greaterDistance: {
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
              distance: 2764.052,
            },
          },
        }),
      );
  });
});
