import styled from "styled-components";

export const Footerstyled = styled.footer`
@import url('https://fonts.googleapis.com/css2?family=Alata&display=swap');
  background-color  : black ;
  display: flex;
  justify-content: space-between;
  align-items: center;

    figure{
        display: flex;
        justify-content: end;
        gap: 18px;
        
    }
    p{
        color: white;
        font-family: 'Alata', sans-serif;
    }

`;
export const DivLogoNav = styled.div`
    display: flex;
    flex-direction: column;
    margin: 40px 0px ;
    gap: 10px;
`;
export const DivRedes = styled.div`
    display: flex;
    flex-direction: column;
    margin: 40px 0px ;
    gap:  10px;
    margin: 0px 180px;
`