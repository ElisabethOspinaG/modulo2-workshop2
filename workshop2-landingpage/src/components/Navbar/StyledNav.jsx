import styled from "styled-components";

export const Nav = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Alata&display=swap');
    display: flex;
    justify-content: space-between;
    color: white;
    padding: ${props => props.padding};
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