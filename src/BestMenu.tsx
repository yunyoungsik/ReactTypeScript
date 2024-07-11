import React from 'react'
import { Menu } from './model/restaurant'

// interface OwnProps extends Menu {
//   showBestMenuName(name: string):string
// }

// type에서 extends를 사용하는 경우 &로 사용
// type OwnProps = Menu & {
//   showBestMenuName(name: string):string
// }

interface OwnProps extends Omit<Menu, 'price'> {
  showBestMenuName(name: string):string
}

const BestMenu:React.FC<OwnProps> = ({name, category, showBestMenuName}) => {
  return (
    <div>BestMenu</div>
  )
}

export default BestMenu