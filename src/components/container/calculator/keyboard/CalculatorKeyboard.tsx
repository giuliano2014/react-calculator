import { VFC } from 'react'

import './styles.css'

import KeyboardKey, { KeyboardKeyProps } from '../../../designSystem/button/keyboard/KeyboardKey'

export type CalculatorKeyboardProps = {
  keyboardKeys: KeyboardKeyProps[]
}

const CalculatorKeyboard: VFC<CalculatorKeyboardProps> = ({ keyboardKeys }) => {
  return (
    <div className="calculatorKeyboard">
      {
        keyboardKeys.map(({label, onClick, value}) => (
          <KeyboardKey
            key={label}
            className={value === '=' ? 'keyboardKeyLarge' : undefined} 
            label={label}
            onClick={onClick}
            value={value}
          />)
        )
      }
    </div>
  )
}

export default CalculatorKeyboard
