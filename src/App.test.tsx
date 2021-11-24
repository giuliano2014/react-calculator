import { render } from '@testing-library/react'

import {
  ColorModeProvider,
  defaultTheme,
  Preflight,
  ThemeProvider,
} from '@xstyled/styled-components'

export const theme = {
  ...defaultTheme,
  colors: {
    bg: '#e1e9fa',
    text: '#14192b',

    modes: {
      dark: {
        bg: 'black',
        text: 'white',
      },
    },
  },
}

import App from './App'

test('render app', () => {
  render(
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <Preflight />
        <App />
      </ColorModeProvider>
    </ThemeProvider>
  )
})
