import { action } from '@storybook/addon-actions'
import { Meta, Story } from '@storybook/react'

import KeyboardKey, { KeyboardKeyProps } from './KeyboardKey'

export default {
  component: KeyboardKey,
  title: 'Design System/Button/KeyboardKey',
} as Meta;

const Template: Story<KeyboardKeyProps> = (args) => <KeyboardKey {...args} />

export const Default = Template.bind({});

Default.args = {
  className: undefined,
  label: '9',
  onClick: action('La touche "9" a été cliquée'),
  value: '9',
};

export const Large = Template.bind({});

Large.args = {
  className: 'keyboardKeyLarge',
  label: '=',
  onClick: action('La touche "=" a été cliquée'),
  value: '=',
};

