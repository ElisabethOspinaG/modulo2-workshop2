import React from 'react';
import logo from '../../images/logo.svg';
import { Nav } from './StyledIndex';
import { Title } from './StyledIndex';

const LogoImg = () => {
  
  return (
    <>
      <Nav>
          <figure>
              <img src={logo} alt="logo" />
          </figure>
      </Nav>
      <Title>
        <p>IMMERSIVE EXPERIENCES THAT DELIVER</p>
      </Title>
    </>
   )
}

export default LogoImg