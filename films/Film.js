const mongoose = require('mongoose');
const Schema = mongoose.Schema
const ObjectId = mongoose.Schema.Types.ObjectId;

const Film = new mongoose.Schema({
  created: { type: Date, default: Date.now },
  episode: Number,
  edited: { type: Date, default: Date.now },
  planet_ids: [Number],
  producer: String,
  title: { type: String, required: true },
  director: String,
  release_date: String,
  opening_crawl: String,
  character_ids: [Number],
  specie_ids: [Number],
  key: { type: Number, unique: true },
  starship_ids: [Number],
  vehicle_ids: [Number],
  starships: [{ type: ObjectId, ref: 'Starship' }],
  vehicles: [{ type: ObjectId, ref: 'Vehicle' }],
  characters: [{ type: ObjectId, ref: 'Character' }],
  species: [{ type: ObjectId, ref: 'Specie' }],
  planets: [{ type: ObjectId, ref: 'Planet' }]
});

Film.index({ producer: 'text', release_date: 'text' })

module.exports = mongoose.model('Film', Film);
