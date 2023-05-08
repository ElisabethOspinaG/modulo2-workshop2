import React from 'react';
import Logo from '../Logo';
import { HeaderBac } from './StledHeader';
import Nabvar from '../Navbar/Nabvar';
import Title from '../Title/Title';
import BurguerButton from '../MenuBurguer/BurguerButton';


const Header = () => {
  return (
    <HeaderBac>
      <Logo padding={"50px 180px"} />
      <Title/>
      <Nabvar className='links' padding={"50px 180px"} />
      <div>
        <BurguerButton/>
      </div>

    </HeaderBac>
  )

}

export default Header