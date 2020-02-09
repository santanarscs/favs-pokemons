import React from 'react'
import ReactDOM from 'react-dom'


import { StoreProvider } from './Store'
import { Router, RouteComponentProps } from '@reach/router'
import App from './App'
import GlobalStyle from './styles/global'

import Home from './pages/Home'
import FavPokemon from './pages/FavPokemon'

const RouterPage = (
  props: { pageComponent: JSX.Element } & RouteComponentProps
) => props.pageComponent


ReactDOM.render(
  <StoreProvider>
    <GlobalStyle />
    <Router>
    <App path="/">
      <RouterPage pageComponent={<Home />} path='/' />
      <RouterPage pageComponent={<FavPokemon />} path='/faves' />
    </App>
    </Router>
  </StoreProvider>,
  document.getElementById('root')
)