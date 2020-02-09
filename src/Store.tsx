import React from 'react'
import { IAction, IState } from './interfaces'

const initialState: IState = {
  loading: false,
  pokemons: [],
  favPokemon: [],
  count: 0,
  next: '',
  previous:'' 
}

export const Store = React.createContext<IState | any>(initialState)

function reducer(state: IState, action: IAction): IState {
  switch(action.type) {
    case 'FETCH_DATA_REQUEST': 
      return { ...state, loading: true, pokemons: []}
    case 'FETCH_DATA':
      return {...state, 
        pokemons: action.payload.pokemons,
        count: action.payload.totalCount,
        next: action.payload.next,
        previous: action.payload.previous,
        loading: false,
      }
    case 'FAV_POKEMON':
      return { ...state, favPokemon: [...state.favPokemon, action.payload]}
    case 'UNFAV_POKEMON':
      return { ...state, favPokemon: action.payload}
    default:
      return state
  }
}
export function StoreProvider({children}: JSX.ElementChildrenAttribute): JSX.Element {
  const [ state, dispatch] = React.useReducer(reducer, initialState);
  return <Store.Provider value={{state, dispatch}}>{children}</Store.Provider>
}