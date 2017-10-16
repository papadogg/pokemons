import * as ACTION from '../const/actions'

const initialState = {
  pokemons: [],
  filters: [],
  searchName: '',
  currentPage: 1,
  amountPerPage: '10'
}

const fetchPokemons = (state, action) => {
  const _state = {
    ...state,
    pokemons: action.payload
  }
  return _state
}

const setFilter = (state, action) => {
  const _state = {
    ...state,
    filters: action.payload
  }
  return _state
}

const setSearchName = (state, action) => {
  const _state = {
    ...state,
    searchName: action.payload
  }
  return _state
}

const setAmountPerPage = (state, action) => {
  const _state = {
    ...state,
    amountPerPage: action.payload
  }
  return _state
}

const setPage = (state, action) => {
  const _state = {
    ...state,
    currentPage: action.payload
  }
  return _state
}

const pokemons = (state = initialState, action) => {
  switch (action.type) {
    case ACTION.FETCH_POKEMONS:
      return fetchPokemons(state, action)
    case ACTION.SET_FILTER:
      return setFilter(state, action)
    case ACTION.SET_SEARCH_NAME:
      return setSearchName(state, action)
    case ACTION.SET_AMOUNT_PER_PAGE:
      return setAmountPerPage(state, action)
    case ACTION.SET_PAGE:
      return setPage(state, action)
    default:
      return state
  }
}

export default pokemons
