export type Dispatch = React.Dispatch<IAction>

export interface IState {
  loading: boolean,
  pokemons: IPokemon[],
  favPokemon: IPokemon[],
  count: number,
  next: string,
  previous: string

}
export interface IAction {
  type: string,
  payload: IPokemon[] | any
}

export interface IPokemon {
  id: number,
  name: string,
  weight: number,
  sprites: {
    front_default: string
  }
}
export interface IPokemonProps {
  pokemons: IPokemon[],
  store: { state: IState, dispatch: Dispatch },
  handleAddPokemon: (state: IState, dispatch: Dispatch, pokemon: IPokemon) => IAction,
  favPokemon: IPokemon[]
}