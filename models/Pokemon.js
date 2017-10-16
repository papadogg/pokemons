const mongoose = require('mongoose')
const { Schema } = mongoose

const pokemonSchema = new Schema({
  name: String,
  avatar: String,
  type: [String],
  abilities: [String]
})

const Pokemon = mongoose.model('Pokemon', pokemonSchema)

module.exports = {
  Pokemon,
  pokemonSchema
}
