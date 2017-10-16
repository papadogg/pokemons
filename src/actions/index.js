import * as ACTION from '../const/actions'
import axios from 'axios'

export const fetchPokemons = () => async dispatch => {
  try {
    const res = await axios.get('/api/pokemons')
    dispatch({
      type: ACTION.FETCH_POKEMONS,
      payload: res.data
    })
  } catch (e) {
    console.log(e)
  }
}

export const setFilter = (filters) => {
  return ({
    type: ACTION.SET_FILTER,
    payload: filters
  })
}

export const setSearchName = (name) => {
  return ({
    type: ACTION.SET_SEARCH_NAME,
    payload: name
  })
}

export const setAmountPerPage = (amount) => {
  return ({
    type: ACTION.SET_AMOUNT_PER_PAGE,
    payload: amount
  })
}

export const setPage = (page) => {
  return ({
    type: ACTION.SET_PAGE,
    payload: page
  })
}

export const fetchFilters = () => async dispatch => {
  try {
    const res = await axios.get('/api/types')
    dispatch({
      type: ACTION.FETCH_FILTERS,
      payload: res.data
    })
  } catch (e) {
    console.log(e)
  }
}
