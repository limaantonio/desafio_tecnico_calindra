require('dotenv').config();
import fetch from 'node-fetch';
import { Address } from '../entities/Address';
import { Edge } from '../entities/Edge';
import { Graph } from '../entities/Graph';
import { convertMetersToKilometers } from '../utils/ConvertDistance';

async function getLatitudeLogitude(address: Address): Promise<Address> {
  const geocode = await fetch(
    `https://api.geoapify.com/v1/geocode/search?name=${address.place_name}&housenumber=${address.housenumber}&street=${address.street}&postcode=${address.postcode}&city=${address.city}&state=${address.state}&country=${address.country}&format=json&apiKey=${process.env.API_KEY}`,
  )
    .then(response => response.json())
    .catch(error => console.log('error', error));

  address.lat = geocode.results[0].lat;
  address.lon = geocode.results[0].lon;

  return address;
}

async function getDistanceTwoPoint(p1: Address, p2: Address): Promise<number> {
  const points = [p1, p2];
  var distance: number;

  await Promise.all(points.map(getLatitudeLogitude));

  const routing = await fetch(
    `https://api.geoapify.com/v1/routing?waypoints=${p1.lat},${p1.lon}|${p2.lat},${p2.lon}&mode=drive&apiKey=${process.env.API_KEY}&`,
  )
    .then(response => response.json())
    .catch(error => console.log('error', error));

  distance = routing.features[0].properties.distance;

  return distance;
}

async function makeGraph(address: Array<Address>) {
  var graph = new Graph(address.length);

  for (var i = 0; i < address.length; i++) {
    graph.addVertex(address[i]);
  }

  for (var i = 0; i < address.length; i++) {
    for (var j = i; j < address.length - 1; j++) {
      const source = address[i];
      const destiny = address[j + 1];
      const distance = await getDistanceTwoPoint(source, destiny);
      const distance_km = convertMetersToKilometers(distance);

      graph.addEdge(source, destiny, distance_km);
    }
  }

  var listDistances = new Array();

  listDistances = graph.getListDistances();

  return listDistances;
}

function getSmallerDistance(listDistances: Array<Edge>): Edge {
  var smallerDistance = new Edge(new Address(), new Address(), 0);
  smallerDistance = listDistances[0];

  for (var i = 1; i < listDistances.length; i++) {
    if (listDistances[i].distance < smallerDistance.distance && smallerDistance)
      smallerDistance = listDistances[i];
  }

  return smallerDistance;
}

function getGreaterDistance(listDistances: Array<Edge>): Edge {
  var greaterDistance = new Edge(new Address(), new Address(), 0);
  greaterDistance = listDistances[0];

  for (var i = 1; i < listDistances.length; i++) {
    if (listDistances[i].distance > greaterDistance.distance)
      greaterDistance = listDistances[i];
  }

  return greaterDistance;
}

export {
  getDistanceTwoPoint,
  makeGraph,
  getSmallerDistance,
  getGreaterDistance,
  getLatitudeLogitude,
};
