import React from 'react'
import { Address, Restaurant } from './model/restaurant'

interface OwnProps {
  info: Restaurant,
  // return type이 있는 경우 true, false void -> bolean
  changeAddress(address:Address): void
}

const Store:React.FC<OwnProps> = ({info}) => {
  return (
    <div>
      <p>{info.name}</p>
    </div>
  )
}

export default Store