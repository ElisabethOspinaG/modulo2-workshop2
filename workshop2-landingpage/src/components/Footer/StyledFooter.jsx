import styled from "styled-components";

export const Footerstyled = styled.footer`
@import url('https://fonts.googleapis.com/css2?family=Alata&display=swap');
  background-color  : black ;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width:375px){

    width: 1500px;
    display: flex;
    flex-direction: column;
    justify-content: center;

  }

    figure{
        display: flex;
        justify-content: end;
        gap: 18px;
        
        
        @media screen and (max-width: 375px){
            padding-top: 30px;
            margin-bottom: 30px;
            display: flex;
            justify-content: center;
            gap: 30px;
                          
        }


    }


    p{
        color: white;
        font-family: 'Alata', sans-serif;
        @media screen and (max-width: 375px){
           font-size: 2rem;
                
        }
    }
`;
export const DivLogoNav = styled.div`
    display: flex;
    flex-direction: column;
    margin: 40px 0px ;
    gap: 10px;

    /* @media screen and (max-width: 375px) {
      width: 35rem;
    } */


`;
export const DivRedes = styled.div`
    display: flex;
    flex-direction: column;
    margin: 40px 0px ;
    gap:  10px;
    margin: 0px 180px;
`
