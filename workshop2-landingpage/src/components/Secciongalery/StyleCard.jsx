import styled from "styled-components";

export const TitleCard = styled.div`
    @import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100&display=swap");
    width: 100%;
    padding: 50px 180px;
    display: flex;
    justify-content: space-between;
    font-family: "Josefin Sans", sans-serif;
    font-size: 28px;
    color: black;

    button {
        padding: 10px 20px;
        background-color: white;
        border-color: black;
        font-size: 15px;
        :hover{
            background-color: black;
            color: white;
            cursor: pointer;
            transition: background-color .4s ease-out;
        }
        
    }  
    @media screen and (max-width: 380px) {
        h2{
            z-index: 100;
            position: absolute;
            left: 10px;
            top: 1100px;
            font-weight: lighter;
        }
      button{
        display: none;
      }
    }
    
    
`
export const CardStyled = styled.div`
    
    @import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100&display=swap");

    width: 100%;
    padding: 50px 180px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    @media screen and (max-width: 380px) {
       display: none;
    }

    article{
        width: 200px;
        position: relative;
        @media screen and (max-width: 765px) {
           
           background-color: red;
           width: 1100px;
           height: 250px;
           margin-bottom: 30px;
        }

    }
    .imgPrincipal {
        width: 100%;
        height: auto;
        opacity: 100%;
        margin-bottom: 30px;  

        @media screen and (max-width: 765px) {
        display: none; 
        }
    }
    .imgMobile{
        display:none;

        @media screen and (max-width: 765px) {
            width: 500px;
        }
    }

    h4{
        font-family: "Josefin Sans", sans-serif;
        font-size: 20px;
        color: white;
        position: absolute;
        z-index: 1000;
        bottom: 30px;
        left: 20%;
        width: 60%;
        padding-bottom: 20px;
    }

`
