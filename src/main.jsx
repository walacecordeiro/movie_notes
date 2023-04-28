import React from 'react'
import ReactDOM from 'react-dom/client'

import { ThemeProvider } from 'styled-components'

import GlobalStyleComponent from './styles/global'
import theme from "./styles/theme"

import { Profile } from "./pages/profile"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyleComponent />
      <Profile />
    </ThemeProvider>
  </React.StrictMode>,
)
