import { FC } from 'react'

export type KeyboardKeyProps = {
  className?: string
  label: string
  onClick: (e: any) => void
  value?: string
}

const KeyboardKey: FC<KeyboardKeyProps> = ({ className, label, onClick, value })  => {
  return (
    <button className={className} value={value} onClick={onClick}>{label}</button>
  )
}

export default KeyboardKey
