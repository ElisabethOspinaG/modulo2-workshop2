import styled from "styled-components";

export const MainInteractive = styled.div`
  margin: 120px 180px 120px 180px;
  display: block;
  align-items: center;

  @media screen and (max-width: 765px) {
    margin: 120px 180px 300px 180px;
  }
  img {
    @media screen and (max-width: 765px) {
      margin: 180px 5px 30px 5px;
      width: 1100px;
    }
  }
`;
export const MainText = styled.div`
  padding: 70px 70px 0px 70px;
  background-color: #ffffff;
  width: 550px;
  height: 300px;
  position: absolute;
  left: 750px;
  bottom: -556px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 765px) {
    display: flex;
    align-items: center;
    padding: 70px 70px 0px 70px;
    background-color: #ffffff;
    width: 1000px;
    position: initial;
  }
`;

export const Title = styled.h1`
  @import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100&display=swap");
  font-family: "Josefin Sans", sans-serif;
  margin: 0px 0px 47px 0px;
  font-size: 3rem;
  font-weight: lighter;
  display: flex;

  @media screen and (max-width: 765px) {
    font-size: 6rem;
    text-align: center;
  }
`;

export const Paragraph = styled.p`
  @import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300&family=Poppins:wght@300&display=swap");
  font-family: "Cormorant Garamond", serif;
  color: #8f8c8c;

  @media screen and (max-width: 765px) {
    font-size: 3rem;
    text-align: center;
  }
`;
