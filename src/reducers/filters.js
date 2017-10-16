import * as ACTION from '../const/actions'

const initialState = {
  filters: []
}

const fetchFilters = (state, action) => {
  const _state = {
    ...state,
    filters: action.payload
  }
  return _state
}

const filters = (state = initialState, action) => {
  switch (action.type) {
    case ACTION.FETCH_FILTERS:
      return fetchFilters(state, action)
    default:
      return state
  }
}

export default filters
