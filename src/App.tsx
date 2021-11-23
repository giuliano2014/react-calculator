
import { useEffect, useState } from 'react'
import styled, { x } from '@xstyled/styled-components'
import { create, all } from 'mathjs'

import CalculatorKeyboard from './components/container/calculator/keyboard/CalculatorKeyboard'
import { KeyboardKeyProps } from './components/designSystem/button/keyboard/KeyboardKey'
import VoiceCalculator from './components/designSystem/button/voice/VoiceButton'
import DarkModeToggle from './components/designSystem/button/darkmode/DarkModeToggle'

const AppWrapper = styled.divBox`
  background-color: bg;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  padding: 20px 0;
`;
  
const Calculator = styled.divBox`
  background-color: #e1e9fa;
  box-shadow: 5px 5px 10px #babecc,-5px -5px 10px #f2f3f5;
`;

const App = () => {
  const math = create(all)
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

    try {
      const result = math.evaluate(mathematicalExpression)
      const roundResult = math.round(result, 2)

      setMathematicalExpression(math.evaluate(roundResult).toString())
    } catch(error) {
      setMathematicalExpression('Error')
    }
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
    <AppWrapper>
      <DarkModeToggle />
      <x.div
        alignItems="center"
        display="flex"
        flexDirection="column"
        marginTop="30px"
      >
        <Calculator
          borderRadius="10px"
          boxSizing="border-box"
          display="flex"
          flexDirection="column"
          padding="15px"
          w="300px"
        >
          <x.input
            borderRadius="10px"
            boxShadow="inset 5px 5px 10px #babecc, inset -5px -5px 10px #f2f3f5"
            color={{_ : '#14192b', placeholder : '#14192b'}}
            fontSize="50px"
            outline="none" 
            padding="10px"
            textAlign="end"
            type="text"
            placeholder="0"
            value={mathematicalExpression}
            onChange={(e:any):void => setMathematicalExpression(e.target.value)}
          />
          <CalculatorKeyboard keyboardKeys={keyboardKeys} />
        </Calculator>
        <VoiceCalculator />
      </x.div>
    </AppWrapper>
  )
}

export default App
