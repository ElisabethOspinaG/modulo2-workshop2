import styled from "styled-components";

export const TitleCard = styled.div`
    @import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100&display=swap");
    width: 100%;
    padding: 50px 180px;
    display: flex;
    justify-content: space-between;
    font-family: "Josefin Sans", sans-serif;
    font-size: 28px;
    color: gray;
    
    button {
        padding: 10px 20px;
        background-color: white;
        border-color: black;
        font-size: 15px;
        :hover{
            background-color: black;
            color: white;
            cursor: pointer;
        }
    }  
    
    @media screen and (max-width: 765px) {
        font-size: 20px;
        padding: 30px 50px;
        text-align: center;
        font-family: "Josefin Sans", sans-serif;
        color: gray;

        button {
            display: none;
        }

    }
`
// export const ImagenMobile = styled.img`

// display:none;

// @media screen and (max-width: 765px) {
//     width: 100%;
//     opacity: 100%;
//     margin-bottom: 30px;
// }
// `

export const CardStyled = styled.div`
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100&display=swap");

width: 100%;
padding: 50px 180px;
display: flex;
justify-content: space-between;
flex-wrap: wrap;
article{
    background-color: red;
    width: 200px;
    position: relative;
}
img {
    width: 100%;
    opacity: 100%;
    margin-bottom: 30px;  
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

@media screen and (max-width: 765px) {
width: 100%;
height: auto;
background-color: yellow;
padding: 20px 20px;
display: inline-block;

    
article{
    /* background-color: black ; */
    width: 400px;
    height: 130px;
    }

    img{
        display: none;
    }

    imgMobil{
     
    width: 100%;

    }
}


`
