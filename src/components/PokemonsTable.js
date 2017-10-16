import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Table } from 'reactstrap'
import _ from 'lodash'

import * as actions from '../actions'
import PokemonItem from './PokemonItem'
import Filter from './Filter'
import Search from './Search'
import AmountPerPage from './AmountPerPage'
import Paginator from './Paginator'

class PokemonsList extends Component {
  componentDidMount () {
    this.props.fetchPokemons()
  }

  pokemonsPerPage () {
    const { currentPage, amountPerPage } = this.props.pokemons
    const pokemonsOnPage = this.filterPokemons().slice(currentPage * amountPerPage - amountPerPage, currentPage * amountPerPage)
    return pokemonsOnPage
  }

  filterPokemons () {
    const { pokemons } = this.props.pokemons
    return this.filterByType(this.filterByName(pokemons))
  }

  showPokemons () {
    return this.pokemonsPerPage().map(pokemon =>
      <PokemonItem
        key={pokemon._id}
        pokemon={pokemon}
      />
    )
  }

  filterByType (list) {
    return list.filter(pokemon => {
      if (_.difference(this.props.pokemons.filters, pokemon.type).length === 0) {
        return true
      }
      return false
    })
  }

  filterByName (list) {
    return list.filter(pokemon => {
      return pokemon.name.indexOf(this.props.pokemons.searchName) > -1
    })
  }

  render () {
    return (
      <div className="row">
        {this.props.pokemons.pokemons.length > 0
          ? [<Search key="1"/>,
            <Filter key="2"/>,
            <div key="3" className="col-md-10 col-sm-9">
              <AmountPerPage />
              <Table hover>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Avatar</th>
                    <th>Type</th>
                    <th>Abilities</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {this.showPokemons()}
                </tbody>
              </Table>
              <Paginator total={this.filterPokemons().length}/>
            </div>]
          : <div className="col-sm-12">
            <div className="spinner">
              <i className="fa fa-spinner fa-spin"></i>
            </div>
          </div> }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    pokemons: state.pokemons,
    user: state.user
  }
}

export default connect(mapStateToProps, actions)(PokemonsList)
