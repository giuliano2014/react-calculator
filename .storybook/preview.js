import {
  ThemeProvider,
  Preflight,
  ColorModeProvider
} from '@xstyled/styled-components'

import { theme } from '../src/index'

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <Preflight />
        <Story />
      </ColorModeProvider>
    </ThemeProvider>
  ),
]

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
