import React from 'react';
import  { IPokemon } from '../../interfaces'
import { Container, AddButton } from './styles';
import { FaRegHeart, FaHeart } from 'react-icons/fa'
const PokemonList = (props: any) => {
  const {pokemons, handleAddPokemon, favPokemon, store } = props;
  const {state, dispatch } = store;
  return (
    <Container>
      {pokemons.map((pokemon: IPokemon) => <section key={pokemon.id}>
        <img src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`} alt={pokemon.name}/>
        <h3>{pokemon.name}</h3>
        <AddButton onClick={() => handleAddPokemon(state, dispatch, pokemon)} >
          {favPokemon.find((pok: IPokemon) => pok.id === pokemon.id) ? <FaHeart size={20} /> : <FaRegHeart size={20}/>}
        </AddButton>
      </section>)}
    </Container>
  )
}

export default PokemonList;
