
import { useEffect, useState } from 'react'
import { create, all } from 'mathjs'

import './App.css'

import CalculatorKeyboard from './components/container/calculator/keyboard/CalculatorKeyboard'
import { KeyboardKeyProps } from './components/designSystem/button/keyboard/KeyboardKey'
import VoiceCalculator from './components/designSystem/button/voice/VoiceButton'

const config = {}
const math = create(all, config)

const App = () => {
  const [mathematicalExpression, setMathematicalExpression] = useState<string>('')

  const keyboardKeys = [
    {
      label: 'AC',
      onClick: () => clearLastCharacter(),
    },
    {
      label: 'C',
      onClick: () => resetMathematicalExpression(),
    },
    {
      label: '%',
      onClick: (e) => updapteMathematicalExpression(e),
      value: '%'
    },
    {
      label: '/',
      onClick: (e) => updapteMathematicalExpression(e),
      value: '/'
    },
    {
      label: '7',
      onClick: (e) => updapteMathematicalExpression(e),
      value: '7'
    },
    {
      label: '8',
      onClick: (e) => updapteMathematicalExpression(e),
      value: '8'
    },
    {
      label: '9',
      onClick: (e) => updapteMathematicalExpression(e),
      value: '9'
    },
    {
      label: '*',
      onClick: (e) => updapteMathematicalExpression(e),
      value: '*'
    },
    {
      label: '4',
      onClick: (e) => updapteMathematicalExpression(e),
      value: '4'
    },
    {
      label: '5',
      onClick: (e) => updapteMathematicalExpression(e),
      value: '5'
    },
    {
      label: '6',
      onClick: (e) => updapteMathematicalExpression(e),
      value: '6'
    },
    {
      label: '-',
      onClick: (e) => updapteMathematicalExpression(e),
      value: '-'
    },
    {
      label: '1',
      onClick: (e) => updapteMathematicalExpression(e),
      value: '1'
    },
    {
      label: '2',
      onClick: (e) => updapteMathematicalExpression(e),
      value: '2'
    },
    {
      label: '3',
      onClick: (e) => updapteMathematicalExpression(e),
      value: '3'
    },
    {
      label: '+',
      onClick: (e) => updapteMathematicalExpression(e),
      value: '+'
    },
    {
      label: '0',
      onClick: (e) => updapteMathematicalExpression(e),
      value: '0'
    },
    {
      label: '.',
      onClick: (e) => updapteMathematicalExpression(e),
      value: '.'
    },
    {
      label: '=',
      onClick: () => calculateTheResult(),
      value: '='
    },
  ] as KeyboardKeyProps[]

  useEffect(() => {
    console.log('useEffect', typeof mathematicalExpression)
  }, [mathematicalExpression])

  const calculateTheResult = (): void => {
    if (!mathematicalExpression) return
    setMathematicalExpression(math.evaluate(mathematicalExpression).toString())
  }
  
  const clearLastCharacter = (): void => {
    console.log('clearLastCharacter', typeof mathematicalExpression)
    setMathematicalExpression(mathematicalExpression.slice(0, -1))
  }

  const resetMathematicalExpression = (): void => {
    setMathematicalExpression('')
  }
  
  const updapteMathematicalExpression = (e: any): void => {
    setMathematicalExpression(mathematicalExpression + e.target.value)
  }

  return (
    <div className="calculatorWrapper">
      <div className="calculator">
        <input
          className="calculatorScreen"
          type="text"
          placeholder="0"
          value={mathematicalExpression}
          onChange={e => setMathematicalExpression(e.target.value)}
        />
        <CalculatorKeyboard keyboardKeys={keyboardKeys} />
      </div>
      <VoiceCalculator />
    </div>
  )
}

export default App
