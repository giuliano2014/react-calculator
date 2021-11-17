import { VFC } from 'react'

import './styles.css'

export type KeyboardKeyProps = {
  className?: string
  label: string
  onClick: (e: any) => void
  value?: string
}

const KeyboardKey: VFC<KeyboardKeyProps> = ({ className, label, onClick, value })  => {
  return (
    <button className={`keyboardKey ${className}`} value={value} onClick={onClick}>{label}</button>
  )
}

export default KeyboardKey
