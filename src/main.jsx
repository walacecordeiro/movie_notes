import React from 'react'
import ReactDOM from 'react-dom/client'

import { ThemeProvider } from 'styled-components'

import GlobalStyleComponent from './styles/global'
import theme from "./styles/theme"

import { NewMovie } from "./pages/newMovie"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyleComponent />
      <NewMovie />
    </ThemeProvider>
  </React.StrictMode>,
)
