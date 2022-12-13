interface Address {}
class Address {
  place_name: string;
  country: string;
  street: string;
  postcode: string;
  city: string;
  neighborhood: string;
  state: string;
  housenumber: string;
  lat: string;
  lon: string;

  constructor() {
    this.place_name = '';
    this.country = '';
    this.street = '';
    this.postcode = '';
    this.city = '';
    this.neighborhood = '';
    this.state = '';
    this.housenumber = '';
    this.lat = '';
    this.lon = '';
  }
}

export { Address };
