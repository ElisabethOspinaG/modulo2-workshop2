import styled from "styled-components";

export const Nav = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Alata&display=swap');
    
    padding: ${props => props.padding};
    
    img{
        width: 15rem; 
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