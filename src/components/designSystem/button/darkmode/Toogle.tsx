import { VFC } from 'react'
import styled, { x } from '@xstyled/styled-components'

type ToggleProps = {
  checked: boolean
  onChange: () => void
}

const InputCheck = styled.inputBox`
  appearance: none;
  background: #555;
  border-radius: 5px;
  cursor: pointer;
  height: 10px;
  outline: none;
  position: relative;
  vertical-align: 2px;
  width: 40px;

  &:checked + label {
    left: 30px;
  }

  &:focus-visible {
    outline: solid 2px white;
  }

  & + label {
    background-color: #f6f6f6;
    border-radius: 50%;
    cursor: pointer;
    display: inline-block;
    height: 18px;
    left: 2px;
    opacity: 0.9;
    position: absolute;
    transition: all 0.3s ease;
    width: 18px;
  }
`

const Toggle: VFC<ToggleProps> = ({ checked, onChange }) => (
  <x.div
    alignItems="center"
    display="flex"
    padding="0 1"
    position="relative"
  >
    <InputCheck
      id="dmcheck"
      type="checkbox"
      checked={checked}
      onChange={onChange}
    />
    <label htmlFor="dmcheck" />
  </x.div>
)

export default Toggle
