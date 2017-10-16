import React, { Component } from 'react';
import { Button } from 'reactstrap'
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import * as actions from '../actions'

class Filter extends Component {
  componentDidMount () {
    this.props.fetchFilters();
    const params = new URLSearchParams(this.props.location.search);
    const type = params.get('type');
    if(type) {
      const types = type.split(",");
      types.forEach(type => this.props.setFilter(types));
    }
  }

  filterPokemons = (e) => {
    const params = new URLSearchParams(this.props.location.search)
    const type = params.get('type')
    let newTypeString = ''
    if (type) {
      const types = type.split(",")
      if (type.indexOf(e.target.innerText) < 0) {
        types.push(e.target.innerText)
        newTypeString = types.join(",")
      } else {
        newTypeString = types.filter(tp => tp !== e.target.innerText).join(",")
      }
    } else {
        newTypeString = e.target.innerText
    }
    params.set('type', newTypeString)
    if(newTypeString.length === 0) {
      params.delete('type')
    }
    params.delete('page')
    this.props.history.push('/?' + decodeURIComponent(params))

  }

  resetFilters = () => {
    const params = new URLSearchParams(this.props.location.search)
    params.delete('type')
    this.props.history.push('/?' + params)
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.location.search !== nextProps.location.search) {
      const params = new URLSearchParams(nextProps.location.search)
      const type = params.get('type')
      if (type) {
        const types = type.split(',')
        this.props.setFilter(types)
      } else {
        this.props.setFilter([])
      }
    }
  }

  showFilters () {
    return this.props.filters.filters.map(filter => {
      return <li
        className={`list-group-item list-group-item-action ${this.props.pokemons.filters.indexOf(filter) > -1 ? 'active' : ''}`}
        key={filter}>{filter}
      </li>
    })
  }

  render () {
    return (
      <div className="col-md-2 col-sm-3 filter">
        <Button outline color="warning" onClick={this.resetFilters}>Reset filters</Button>
        <ul className="list-group" onClick={this.filterPokemons}>
          {this.showFilters()}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    pokemons: state.pokemons,
    filters: state.filters
  }
}

export default withRouter(connect(mapStateToProps, actions)(Filter))
