import React from 'react';
import Logo from '../Logo';
import { HeaderBac } from './StledHeader';
import Nabvar from '../Navbar/Nabvar';


const Header = () => {
  return (
    <HeaderBac>
      <Logo/>
      <Nabvar/>
    </HeaderBac>
  )
}

export default Header