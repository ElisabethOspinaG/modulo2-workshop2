import styled from "styled-components";

export const Nav = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Alata&display=swap");
  padding: ${(props) => props.padding};

  img {
    width: 15rem;
    @media screen and (max-width: 765px) {
      width: 35rem;
    }
  }
`;


