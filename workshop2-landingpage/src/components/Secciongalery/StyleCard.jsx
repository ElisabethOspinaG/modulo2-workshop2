import styled from "styled-components";

export const CardStyled = styled.div `
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100&display=swap");

width: 100%;
padding: 50px 180px;
display: flex;
gap: 44px;
/* position: relative; */
flex-wrap: wrap;
article{
    /* background-color: black ; */
    width: 200px;
    position: relative;
}
img {
    width: 100%;
    height: 100%;
    opacity: 100%;
    
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
}

`