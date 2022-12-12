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
    jest.setTimeout(500000);
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

    expect(response.body).toEqual(
      expect.objectContaining({
        distance: 2763.882,
      }),
    );
  });
});
