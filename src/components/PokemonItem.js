import React from 'react'

const PokemonItem = ({ pokemon }) => {
  return (
    <tr>
      <td>{pokemon.name}</td>
      <td><img src={pokemon.avatar} alt={pokemon.name} /></td>
      <td>{pokemon.type.join(', ')}</td>
      <td>{pokemon.abilities.join(', ')}</td>
    </tr>
  )
}

export default PokemonItem
