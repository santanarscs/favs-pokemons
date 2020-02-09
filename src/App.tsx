import React from 'react'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import { Store } from './Store'
import { Link } from '@reach/router'
import {Container } from './style'
import usePersistedState from './utils/usePersistedState'
import light from './styles/themes/light'
import dark from './styles/themes/dark'
import Header from './components/Header'
const App = (props: any): JSX.Element => {
  const { state } = React.useContext(Store)
  const [ theme, setTheme ] = usePersistedState<DefaultTheme>('theme', light)

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }
  return (
    <ThemeProvider theme={theme}>
    <Container>
      <Header toggleTheme={toggleTheme} />
      {/* <Header>
        <Content>
        <div>
          <h1>Pokemons</h1>
        </div>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/faves'>Favourites: ({state.favPokemon.length}) </Link>
        </nav>
        </Content>
      </Header> */}
      {props.children}
    </Container>
    </ThemeProvider>
  )
}

export default App