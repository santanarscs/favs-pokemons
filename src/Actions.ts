import { IAction, IPokemon, IState} from './interfaces'
import axios from 'axios';
export const fetchDataAction = async (dispatch: any, url: string = 'https://pokeapi.co/api/v2/pokemon') => {
const runAsyncFunctions = async () => {
    const response = await axios.get(url);
    const teste =  await Promise.all(
      response.data.results.map(async(data: any) => {
        const response = await axios.get(data.url)
        return response.data
      })
    )
    return {
      pokemons: teste,
      totalCount: response.data.count,
      next: response.data.next,
      previous: response.data.previous
    }
  }
  const response = await runAsyncFunctions();
  return dispatch({
    type: 'FETCH_DATA',
    payload: response
  })
}

export const handleAddPokemon = (state: IState, dispatch: any, pokemon: IPokemon | any):IAction => {
  
  const favPokemon = state.favPokemon.includes(pokemon);
  
  let dispatchObj = {
    type: 'FAV_POKEMON',
    payload:  pokemon
  };
  if(favPokemon) {
    const  pokedexWithoutPokemon = state.favPokemon.filter((fav: IPokemon) => fav.id !== pokemon.id)
    dispatchObj = {
      type: 'UNFAV_POKEMON',
      payload: pokedexWithoutPokemon
    }
  }
  return dispatch(dispatchObj)
}
