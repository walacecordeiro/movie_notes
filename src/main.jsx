import React from 'react'
import ReactDOM from 'react-dom/client'

import { ThemeProvider } from 'styled-components'

import GlobalStyleComponent from './styles/global'
import theme from "./styles/theme"

import { Details } from "./pages/details"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyleComponent />
      <Details />
    </ThemeProvider>
  </React.StrictMode>,
)
