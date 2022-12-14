require('dotenv').config();
import fetch from 'node-fetch';
import { Address } from '../entities/Address';
import { Edge } from '../entities/Edge';

async function getLatitudeLogitude(address: Address): Promise<Address> {
  try {
    const geocode = await fetch(
      `https://api.geoapify.com/v1/geocode/search?name=${address.place_name}&housenumber=${address.housenumber}&street=${address.street}&postcode=${address.postcode}&city=${address.city}&state=${address.state}&country=${address.country}&format=json&apiKey=${process.env.API_KEY}`,
    ).then(response => response.json());

    address.lat = geocode.results[0].lat;
    address.lon = geocode.results[0].lon;
  } catch (error: any) {
    return error;
  }

  return address;
}

async function getDistanceTwoPoint(p1: Address, p2: Address): Promise<number> {
  const points = [p1, p2];
  var distance: number;

  try {
    await Promise.all(points.map(getLatitudeLogitude));

    const routing = await fetch(
      `https://api.geoapify.com/v1/routing?waypoints=${p1.lat},${p1.lon}|${p2.lat},${p2.lon}&mode=drive&apiKey=${process.env.API_KEY}&`,
    ).then(response => response.json());

    distance = routing.features[0].properties.distance;
  } catch (error: any) {
    return error;
  }

  return distance;
}

function getSmallerDistance(listDistances: Array<Edge>): Edge {
  var smallerDistance = listDistances[0];

  for (var i = 1; i < listDistances.length; i++) {
    if (listDistances[i].distance < smallerDistance.distance && smallerDistance)
      smallerDistance = listDistances[i];
  }

  return smallerDistance;
}

function getGreaterDistance(listDistances: Array<Edge>): Edge {
  var greaterDistance = listDistances[0];

  for (var i = 1; i < listDistances.length; i++) {
    if (listDistances[i].distance > greaterDistance.distance)
      greaterDistance = listDistances[i];
  }

  return greaterDistance;
}

export {
  getDistanceTwoPoint,
  getSmallerDistance,
  getGreaterDistance,
  getLatitudeLogitude,
};
