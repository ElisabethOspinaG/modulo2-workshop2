import React from 'react';
import Logo from '../Logo';
import { HeaderBac } from './StledHeader';
import Nabvar from '../Navbar/Nabvar';


const Header = () => {
  return (
    <HeaderBac>
      <Logo padding={"50px 180px"}/>
      <Nabvar padding={"50px 180px"}/>
    </HeaderBac>
  )
  
}

export default Header