import React from 'react'
import Switch from 'react-switch'
import { Store } from '../../Store'
import {ThemeContext} from 'styled-components'
import {shade} from 'polished'
import  { Container } from './styles'
import { Link } from '@reach/router'


interface Props {
  toggleTheme(): void
}

const Header: React.FC<Props> = ({toggleTheme}) => {
  const { state } = React.useContext(Store)
  const { title, colors } = React.useContext(ThemeContext)
  return (
    <Container>
      <Link to="/"><h1>Pokemons</h1></Link>
      <div>
      <nav>
          <Link to='/faves'>Favourites: ({state.favPokemon.length}) </Link>
        </nav>
      <Switch 
        onChange={toggleTheme}
        checked={title === 'dark'} 
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offColor={shade(0.1, colors.primary)}
        onColor={colors.secondary}

      />
      </div>
    </Container>
  )
}

export default Header