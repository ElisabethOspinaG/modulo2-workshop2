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
        font-size: 3rem;
        width: 1100px;
        text-align: center;
        align-items: center;
        font-family: "Josefin Sans", sans-serif;
        color: gray;
        /* padding: 50px 180px 50px 320px; */
        margin: 120px 180px 80px 180px;
        
        button {
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

    @media screen and (max-width: 765px) {
        padding: 0px 0px;
        width: 1100px;
        height: auto;
        background-color: #00b3ff;
        margin: 120px 180px 300px 180px;
        display: flex;
        flex-direction: column;
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
    }

`
// export const FigurePrincipal = styled.figure `
//     width: 200px;
//     height: auto;
//     opacity: 50%;
//     margin-bottom: 30px;   

//     img{
//         @media screen and (max-width: 375px) {
//         display: none; 
//     }

//     }

// `
       
// export const FigureMobile = styled.figure `
   

//    display: none;

//    img{
//     @media screen and (max-width: 765px) {
//     width: 900px;
//     height: auto;
//     opacity: 100%;
//     margin-bottom: 30px;  
//     }

//    }
   
// `