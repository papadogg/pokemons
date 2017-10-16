import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'

import * as actions from '../actions'

class AmountPerPage extends Component {
  componentDidMount () {
    const params = new URLSearchParams(this.props.location.search)
    const amount = params.get('pp')
    if (amount) {
      this.props.setAmountPerPage(amount)
    }
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.location.search !== nextProps.location.search) {
      const params = new URLSearchParams(nextProps.location.search)
      const amount = params.get('pp')
      if (amount) {
        this.props.setAmountPerPage(amount)
      } else {
        this.props.setAmountPerPage('10')
      }
    }
  }

  setAmountPerPage = (e) => {
    const amount = e.target.innerText
    const params = new URLSearchParams(this.props.location.search)
    params.set('pp', amount)
    if (amount === '10') {
      params.delete('pp')
    }
    this.props.history.push('/?' + params)
  }

  render () {
    return (
      <div className="amount-per-page">
        <p>Amount per page</p>
        <ul onClick={this.setAmountPerPage}>
          <li className={this.props.pokemons.amountPerPage === '10' ? 'active' : ''}>10</li>
          <li className={this.props.pokemons.amountPerPage === '20' ? 'active' : ''}>20</li>
          <li className={this.props.pokemons.amountPerPage === '30' ? 'active' : ''}>30</li>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    pokemons: state.pokemons
  }
}

export default withRouter(connect(mapStateToProps, actions)(AmountPerPage))
