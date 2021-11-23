import { Meta, Story } from '@storybook/react'
import styled from '@xstyled/styled-components'

import DarkModeToggle from './DarkModeToggle'

const AppWrapper = styled.divBox`
  background-color: bg;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

export default {
  component: DarkModeToggle,
  title: 'Design System/Button/DarkModeToggle',
  decorators: [story => <AppWrapper>{story()}</AppWrapper>],
} as Meta

const Template: Story = () => <DarkModeToggle />

export const Default = Template.bind({})