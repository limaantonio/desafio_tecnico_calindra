import fetch from 'node-fetch';
import { Address } from '../entities/Address';

async function getLatitudeLogitude(data: Address): Promise<number> {
  const res = await fetch(
    `https://api.geoapify.com/v1/geocode/search?name=${data.place_name}&housenumber=${data.housenumber}&street=${data.street}&postcode=${data.postcode}&city=${data.city}&state=${data.state}&country=${data.country}&format=json&apiKey=28d602d627cb411d988f5a9790dcefdf`,
  )
    .then(response => response.json())
    .catch(error => console.log('error', error));

  const lat = res.results[0].lat;
  const lon = res.results[0].lon;

  return lat;
}

export { getLatitudeLogitude };
