import React from 'react';
import Logo from '../Logo';
import { HeaderBac } from './StledHeader';
import Nabvar from '../Navbar/Nabvar';
import Title from '../../Title/Title';


const Header = () => {
  return (
    <HeaderBac>
      <Logo padding={"50px 180px"}/>
      <Title/>
      <Nabvar padding={"50px 180px"}/>
    </HeaderBac>
  )
  
}

export default Header