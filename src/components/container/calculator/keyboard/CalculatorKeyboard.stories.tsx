import { action } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/react'

import CalculatorKeyboard, { CalculatorKeyboardProps } from './CalculatorKeyboard'

export default {
  component: CalculatorKeyboard,
  title: 'Container/Calculator/CalculatorKeyboard',
} as Meta;

const Template: Story<CalculatorKeyboardProps> = (args) => <CalculatorKeyboard {...args} />

export const Default = Template.bind({});

Default.args = {
  keyboardKeys : [
    {
      label: 'AC',
      onClick: action('La touche "AC" a été cliquée'),
    },
    {
      label: 'C',
      onClick: action('La touche "C" a été cliquée'),
    },
    {
      label: '%',
      onClick: action('La touche "%" a été cliquée'),
      value: '%'
    },
    {
      label: '/',
      onClick: action('La touche "/" a été cliquée'),
      value: '/'
    },
    {
      label: '7',
      onClick: action('La touche "7" a été cliquée'),
      value: '7'
    },
    {
      label: '8',
      onClick: action('La touche "8" a été cliquée'),
      value: '8'
    },
    {
      label: '9',
      onClick: action('La touche "9" a été cliquée'),
      value: '9'
    },
    {
      label: '*',
      onClick: action('La touche "*" a été cliquée'),
      value: '*'
    },
    {
      label: '4',
      onClick: action('La touche "4" a été cliquée'),
      value: '4'
    },
    {
      label: '5',
      onClick: action('La touche "5" a été cliquée'),
      value: '5'
    },
    {
      label: '6',
      onClick: action('La touche "6" a été cliquée'),
      value: '6'
    },
    {
      label: '-',
      onClick: action('La touche "-" a été cliquée'),
      value: '-'
    },
    {
      label: '1',
      onClick: action('La touche "1" a été cliquée'),
      value: '1'
    },
    {
      label: '2',
      onClick: action('La touche "2" a été cliquée'),
      value: '2'
    },
    {
      label: '3',
      onClick: action('La touche "3" a été cliquée'),
      value: '3'
    },
    {
      label: '+',
      onClick: action('La touche "+" a été cliquée'),
      value: '+'
    },
    {
      label: '0',
      onClick: action('La touche "0" a été cliquée'),
      value: '0'
    },
    {
      label: '.',
      onClick: action('La touche "." a été cliquée'),
      value: '.'
    },
    {
      label: '=',
      onClick: action('La touche "=" a été cliquée'),
      value: '='
    },
  ]
}
