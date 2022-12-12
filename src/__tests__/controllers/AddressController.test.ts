import { describe, expect, test } from '@jest/globals';
import request from 'supertest';
import { AddressController } from '../../controllers/AddressController';
const addressController = new AddressController();

describe('Test the endpoint calculate distance', () => {
  test('It should response the GET method', done => {
    request(addressController.index)
      .get('/')
      .then(response => expect(response.statusCode).toBe(200));
    done();
  });

  test('It should response the POST method with the list of distances', async () => {
    jest.setTimeout(50000);
    const response = await request(addressController.calculate_distance)
      .post('/address')
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
        ],
      });

    expect(response.body).toContain(
      expect.objectContaining({
        listDistance: [
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
        ],
        smallerDistance: 0,
        greaterDistance: 2764.052,
      }),
    );
  });
});
