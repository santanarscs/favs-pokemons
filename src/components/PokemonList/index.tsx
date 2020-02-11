import React from 'react';
import  { IPokemon } from '../../interfaces'
import { Container, AddButton, ContainerModal } from './styles';
import { FaRegHeart, FaHeart, FaTimes } from 'react-icons/fa'
import Modal from '../Modal'
const PokemonList = (props: any) => {
  const {pokemons, handleAddPokemon, favPokemon, store } = props;
  const {state, dispatch } = store;
  const [stateModal, setStateModal] = React.useState<boolean>(false)
  const [selectedPokemon, setSelectedPokemon ] = React.useState<IPokemon>();

  const handleOpenModal = (pokemon: IPokemon) => {
    setStateModal(true)
    setSelectedPokemon(pokemon)
    console.log(selectedPokemon)
  }
  const handleCloseModal = () => {
    setStateModal(false)
  }

  return (
    <Container>
      {pokemons.map((pokemon: IPokemon) => 
      <section key={pokemon.id} >
        <img src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`} alt={pokemon.name}/>
        <h3 onClick={() => handleOpenModal(pokemon)}>{pokemon.name}</h3>
        <AddButton onClick={() => handleAddPokemon(state, dispatch, pokemon)} >
          {favPokemon.find((pok: IPokemon) => pok.id === pokemon.id) ? <FaHeart size={20} /> : <FaRegHeart size={20}/>}
        </AddButton>
      </section>)}
      {(stateModal && selectedPokemon) && (
        <Modal>
          <ContainerModal>
            <button type="button" onClick={() => handleCloseModal()}><FaTimes size={25} /></button>
            <img src={`https://pokeres.bastionbot.org/images/pokemon/${selectedPokemon.id}.png`} alt={selectedPokemon.name}/>
            <h1>{selectedPokemon.name}</h1>
          </ContainerModal>
        </Modal>
      )}
    </Container>
  )
}

export default PokemonList;
