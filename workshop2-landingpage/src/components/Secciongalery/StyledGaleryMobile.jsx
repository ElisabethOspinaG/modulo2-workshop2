import styled from "styled-components";

export const StylesCardsMobile = styled.div`
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100&display=swap");
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    padding: 10px 40px 0px 40px;
    margin-top: 280px;
    
    img{
        width: 300px;
        height: auto;
        opacity: 0.9;
        filter: brightness(80%)
    }
    h4{
        
        font-family: "Josefin Sans", sans-serif;
        color: hsl(0, 0%, 100%);
        width: 45%;
        font-size: 25px;
        font-weight: lighter;
        display: flex;
        position: relative;
        bottom: 70px;
        left: 17px ;
        padding: 0;
        margin: 0;
    }


    @media screen and (min-width: 380px) {
       display: none;
    }
`