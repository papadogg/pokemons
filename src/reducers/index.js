import { combineReducers } from 'redux'

import pokemons from './pokemons'
import filters from './filters'

export default combineReducers({
  pokemons,
  filters
})
