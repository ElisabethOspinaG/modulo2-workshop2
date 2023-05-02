import React from 'react';
import logo from '../../images/logo.svg';
import { Nav } from './StyledIndex';
import { Title } from './StyledIndex';

const LogoImg = () => {
  const links = [
    {
        name: "About",
        route: ""
    },
    {
        name: "Careers",
        route: ""
    },
    {
        name: "Events",
        route: ""
    },
    {
        name: "Products",
        route: ""
    },
    {
        name: "Support",
        route: ""
    }
]
  return (
    <>
      <Nav>
          <figure>
              <img src={logo} alt="logo" />
          </figure>
          <nav>
            <ul>
                {
                  links.map((item, index) => <a href='#'><li key={`${item.name}-${index}`}>{item.name}</li></a>)
                }
            </ul>
          </nav>
      </Nav>
      <Title>
        <p>IMMERSIVE EXPERIENCES THAT DELIVER</p>
      </Title>
    </>
   )
}

export default LogoImg