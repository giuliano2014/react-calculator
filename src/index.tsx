import React from 'react'
import ReactDOM from 'react-dom'
import {
  defaultTheme,
  ThemeProvider,
  Preflight,
  ColorModeProvider
} from '@xstyled/styled-components'

import App from './App'
import reportWebVitals from './reportWebVitals'

const theme = {
  ...defaultTheme,
  colors: {
    bg: "#e1e9fa",
    text: "#333",
    modes: {
      dark: {
        bg: "#0f172aff",
        text: "#dfdfdf",
      }
    }
  }
}

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <Preflight />
        <App />
      </ColorModeProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
