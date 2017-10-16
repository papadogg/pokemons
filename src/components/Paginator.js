import React, { Component } from 'react'
import UltimatePagination from 'react-ultimate-pagination-bootstrap-4'
import { Redirect } from 'react-router-dom'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'

import * as actions from '../actions'

class Paginator extends Component {
  componentDidMount () {
    const params = new URLSearchParams(this.props.location.search)
    const page = params.get('page')
    if (page) {
      this.props.setPage(parseInt(page, 10))
    }
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.location.search !== nextProps.location.search) {
      const params = new URLSearchParams(nextProps.location.search)
      const page = params.get('page')
      if (page) {
        this.props.setPage(parseInt(page, 10))
      } else {
        this.props.setPage(1)
      }
    }
  }

  onChange = (page) => {
    const params = new URLSearchParams(this.props.location.search)
    params.set('page', page)
    if (page === 1) {
      params.delete('page')
    }
    this.props.history.push('/?' + params)
    window.scroll(0,0);
  }

  render () {
    const { pokemons, currentPage, amountPerPage } = this.props.pokemons
    const totalPages = Math.ceil(this.props.total / amountPerPage) || 1
    if (currentPage > totalPages) {
      return <Redirect to='/' />
    }
    return (
      <div className="paginator">
        {
          pokemons.length > 0
            ? <UltimatePagination
              currentPage={currentPage}
              totalPages={totalPages}
              onChange={this.onChange}
            />
            : ''
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    pokemons: state.pokemons
  }
}

export default withRouter(connect(mapStateToProps, actions)(Paginator))
