import React from 'react'
import LogoImg from '../Logo'
import Nabvar from '../Navbar/Nabvar'
import { Footerstyled } from './StyledFooter';
import ImgFacebook from "../../images/icon-facebook.svg"
import ImgTwitter from "../../images/icon-twitter.svg"
import ImgPinterest from "../../images/icon-pinterest.svg"
import ImgInstagram from "../../images/icon-instagram.svg"
import { DivLogoNav, DivRedes } from './StyledFooter';
const Footer = () => {
  return (
    <Footerstyled>
      <DivLogoNav>
        <LogoImg padding={"0px 180px"}/>
        <Nabvar padding={"0px 0px 0px 180px"}/>
      </DivLogoNav>
      <DivRedes>
        <figure>
          <img src={ImgFacebook} alt="facebook" />
          <img src={ImgTwitter} alt="twitter" />
          <img src={ImgPinterest} alt="pinterest" />
          <img src={ImgInstagram} alt="instagram" />
        </figure>
        <p>
        © 2021 Loopstudios. All rights reserved.
        </p>
      </DivRedes>
    </Footerstyled>
  )
}

export default Footer