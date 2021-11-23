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
      bg={{ _: '#e1e9fa', hover: '#d7e1f9' }}
      borderRadius={largeButton ? '10px' : '50%'}
      boxShadow="5px 5px 10px #babecc, -5px -5px 10px #f2f3f5"
      fontSize="22px"
      gridColumn={largeButton ? 'span 2 / span 2' : 'auto'}
      h="60px"
      minW={largeButton ? '130px' : '60px'}
      outline={{ focus: 'none' }}
      padding="0"
      value={value}
      onClick={onClick}
    >
      {label}
    </x.button>
  )
}

export default KeyboardKey
