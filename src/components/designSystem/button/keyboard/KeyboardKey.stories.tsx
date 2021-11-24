import { Meta, Story } from '@storybook/react'

import KeyboardKey, { KeyboardKeyProps } from './KeyboardKey'

export default {
  component: KeyboardKey,
  title: 'Design System/Button/KeyboardKey',
  argTypes: { onClick: { action: 'clicked' } },
} as Meta

const Template: Story<KeyboardKeyProps> = (args) => <KeyboardKey {...args} />

export const Default = Template.bind({})
Default.args = {
  label: '9',
  largeButton: false,
  value: '9',
}

export const largeButton = Template.bind({})
largeButton.args = {
  largeButton: true,
  label: '=',
  value: '=',
}

