const mongoose = require('mongoose');

const AddressSchema = new mongoose.Schema({
  place_name: {
    type: String,
    required: true,
  },

  country: {
    type: String,
    required: true,
  },

  state: {
    type: String,
    required: true,
  },

  neighborhood: {
    type: String,
    required: true,
  },

  city: {
    type: String,
    required: true,
  },

  postcode: {
    type: String,
    required: true,
  },

  housenumber: {
    type: String,
    required: true,
  },

  street: {
    type: String,
    required: true,
  },

  lat: {
    type: String,
    required: true,
  },

  lon: {
    type: String,
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model('Address', AddressSchema);
