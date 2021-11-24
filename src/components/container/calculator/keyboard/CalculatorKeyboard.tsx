import { VFC } from 'react'
import { x } from '@xstyled/styled-components'

import KeyboardKey, { KeyboardKeyProps } from '../../../designSystem/button/keyboard/KeyboardKey'

export type CalculatorKeyboardProps = {
  keyboardKeys: KeyboardKeyProps[]
}

const CalculatorKeyboard: VFC<CalculatorKeyboardProps> = ({ keyboardKeys }) => (
  <x.div
    display="grid"
    gridTemplateColumns={4}
    gap="10px"
    marginTop="15px"
  >
    {
      keyboardKeys.map(({label, onClick, value}) => (
        <KeyboardKey
          key={label}
          label={label}
          largeButton={value === '=' ? true : false}
          onClick={onClick}
          value={value}
        />)
      )
    }
  </x.div>
)

export default CalculatorKeyboard
