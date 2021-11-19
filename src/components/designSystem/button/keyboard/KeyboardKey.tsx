import { VFC } from 'react'
import { x } from '@xstyled/styled-components'

export type KeyboardKeyProps = {
  label: string
  largeButton?: boolean
  onClick: (e: any) => void
  value?: string
}

const KeyboardKey: VFC<KeyboardKeyProps> = ({ label, largeButton, onClick, value })  => {
  return (
    <x.button
      bg={{ _: '', hover: '#babecc' }}
      border="none"
      borderRadius={largeButton ? '10px' : '50%'}
      boxShadow="5px 5px 10px #babecc, -5px -5px 10px #f2f3f5"
      cursor="pointer"
      h="60px"
      margin="8px"
      outline={{ focus: 'none' }}
      w={largeButton ? '132px' : '60px'}
      value={value}
      onClick={onClick}
    >
      {label}
    </x.button>
  )
}

export default KeyboardKey
