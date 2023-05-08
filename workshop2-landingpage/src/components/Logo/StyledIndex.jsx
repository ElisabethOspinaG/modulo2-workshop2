import styled from "styled-components";

export const Nav = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Alata&display=swap");
  padding: ${(props) => props.padding};
  @media screen and (max-width: 380px) {
      padding: 20px 0px 0px 30px;
      width: auto;
    }

  img {
    width: 15rem;
    @media screen and (max-width: 380px) {
      padding: 0;
      width: auto;
    }
  }
`;


