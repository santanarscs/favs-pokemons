import React from 'react'
import { Store } from '../../Store'
import { IPokemonProps } from '../../interfaces'
import { fetchDataAction, handleAddPokemon } from '../../Actions'
import  Pagination  from '../../components/Pagination'
const PokemonList = React.lazy<any>(() => import('../../components/PokemonList'))

const Home: React.FC = () => {
  const { state, dispatch } = React.useContext(Store)
  React.useEffect(() => {
    state.pokemons.length === 0 && fetchDataAction(dispatch)
  }, [dispatch, state.pokemons.length])
  
  const propsList: IPokemonProps = {
    pokemons: state.pokemons,
    store: { state, dispatch},
    handleAddPokemon,
    favPokemon:  state.favPokemon
  }
  const propsPagination: any = {
    count: state.count,
    next: state.next,
    fetchDataAction,
    previous: state.previous,
    store: { state, dispatch},
  } 

  return (
    <>
    
      <React.Suspense fallback={<div>Carregando</div>} >
        <section>
          <PokemonList {...propsList} />
        </section>
        <section>
          <Pagination {...propsPagination} />
        </section>
      </React.Suspense>
    </>
  )
}

export default Home