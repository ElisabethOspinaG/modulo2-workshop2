import styled from "styled-components";

export const Nav = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Alata&display=swap');
    display: flex;
    justify-content: space-between;
    color: white;
    padding: 50px 180px 50px 180px;
    align-items: center;
    img{
        width: 15rem; 
    }
    ul{
        a{
            text-decoration: none;
        }
        display: flex;
        gap: 20px;
        li{
            font-family: 'Alata', sans-serif;
            font-size: 19px;
            color: white;
            font-weight: 400;
            list-style: none;
        }
    }
`;
export const Title = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100&display=swap');
    width: 43%;
    position: absolute;
    left: 180px;
    top: 250px;
    padding: 30px;
    border: 2px solid hsl(0, 0%, 100%);
    p{
        width: 100%;
        font-family: 'Josefin Sans', sans-serif;
        font-size: 4rem;
       color: hsl(0, 0%, 100%)
       
    }
 `;