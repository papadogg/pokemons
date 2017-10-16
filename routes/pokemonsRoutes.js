const {Pokemon} = require('../models/Pokemon')

module.exports = (app) => {
  app.get('/api/pokemons', async (req, res) => {
    try {
      const pokemons = await Pokemon.find()
      res.json(pokemons)
    } catch (e) {
      console.log(e)
    }
  })

  app.get('/api/types', (req, res) => {
    const types = [
      'normal',
      'fighting',
      'flying',
      'poison',
      'ground',
      'rock',
      'bug',
      'ghost',
      'steel',
      'fire',
      'water',
      'grass',
      'electric',
      'psychic',
      'ice',
      'dragon',
      'dark',
      'fairy'
    ]
    res.json(types)
  })
}
