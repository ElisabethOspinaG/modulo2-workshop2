import React, { useState } from 'react';
import Logo from '../Logo';
import { HeaderBac } from './StledHeader';
import Nabvar from '../Navbar/Nabvar';
import Title from '../Title/Title';
import BurguerButton from '../MenuBurguer/BurguerButton';


const Header = () => {
  const hamdleClick = () => {
    setClicked(!clicked)
  }
  const [clicked, setClicked] = useState(false)
  return (
    <HeaderBac>
      <Logo padding={"50px 180px"} />
      <Title />
      <div className={`links ${clicked ? 'active' : ''}`}>
        <Nabvar padding={"50px 180px"} />
      </div>

      <div>
        <BurguerButton clicked={clicked} handleClick={hamdleClick} />
      </div>
    </HeaderBac>
  )

}

export default Header