import styled from "styled-components";

export const Titlestyle = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100&display=swap");
  width: 43%;
  position: absolute;
  left: 180px;
  top: 250px;
  overflow: hidden;
  border: 2px solid hsl(0, 0%, 100%);

  @media screen and (max-width: 380px) {
    position: absolute;
    left: 10px;
    width: 91%;
    height: 40vh;
    
    border: 2px solid hsl(0, 0%, 100%);
  }

  p {
    width: 100%;
    font-family: "Josefin Sans", sans-serif;
    font-size: 4rem;
    color: hsl(0, 0%, 100%);
    padding: 20px 20px 20px 30px;
    @media screen and (max-width: 380px) {
      width: 100%;
      position: absolute;
      left: 0px;
      top: 0px;
      padding: 20px 10px 20px 10px;
      font-size: 2.8rem;
    }
  }
`;
