import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { FormGroup, Col, Input, Label } from 'reactstrap'

import * as actions from '../actions'

class Search extends Component {
  componentDidMount () {
    const params = new URLSearchParams(this.props.location.search)
    const name = params.get('name')
    if (name) {
      this.props.setSearchName(name)
    }
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.location.search !== nextProps.location.search) {
      const params = new URLSearchParams(nextProps.location.search)
      const name = params.get('name')
      if (name) {
        this.props.setSearchName(name)
      } else {
        this.props.setSearchName('')
      }
    }
  }

  changeName = (e) => {
    const newName = e.target.value
    const params = new URLSearchParams(this.props.location.search)
    params.set('name', newName)
    if (newName.length === 0) {
      params.delete('name')
    }
    params.delete('page')
    this.props.history.push('/?' + params)
  }

  render () {
    return (
      <div className="col-sm-12 search">
        <FormGroup row>
          <Label for="exampleEmail" md={2} sm={3} style={{ textAlign: 'right' }}>Search by name</Label>
          <Col md={10} sm={9}>
            <Input type="text" value={this.props.pokemons.searchName} onChange={this.changeName} />
          </Col>
        </FormGroup>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    pokemons: state.pokemons
  }
}

export default withRouter(connect(mapStateToProps, actions)(Search))
