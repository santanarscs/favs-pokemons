import React from 'react'
import { Store } from '../../Store'
import { IPokemonProps } from '../../interfaces'
import { handleAddPokemon } from '../../Actions'
const PokemonList = React.lazy<any>(() => import('../../components/PokemonList'))

const FavPokemon: React.FC = () => {
  const { state, dispatch } = React.useContext(Store)
  const props: IPokemonProps = {
    pokemons: state.favPokemon,
    store: {state, dispatch},
    handleAddPokemon,
    favPokemon: state.favPokemon
  }
  return (
    <React.Suspense fallback={<div>loading...</div>}>
      <section>
        <PokemonList {...props} />
      </section>
    </React.Suspense>

  )


}

export default FavPokemon