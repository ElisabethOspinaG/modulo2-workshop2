import styled from "styled-components";
import imghero from "../../images/desktop/image-hero.jpg";
import ImgheroMobile from "../../images/mobile/image-hero.jpg";

export const HeaderBac = styled.header`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  height: 90vh;
  background-image: url(${imghero});
  background-size: cover;
  background-position: center;

  @media screen and (max-width: 765px) {
    background-image: url(${ImgheroMobile});
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: 399%;
    height: 300vh;
    background-size: cover;
    background-position: center;
  }
`;
