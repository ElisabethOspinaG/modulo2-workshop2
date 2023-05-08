import styled from "styled-components";

export const ButtonStyle = styled.div `

    display: none;
    
    @media screen and (max-width: 765px) {

        width: 1100px;
        align-items: center;
        margin: 120px 180px 300px 180px;
        display: flex;
        justify-content: center;

        button {
            padding: 20px 20px;
            width: 25%;
            background-color: white;
            border-color: black;
            font-size: 20px;
            
            :hover {
                background-color: black;
                color: white;
                cursor: pointer;
            }
        }
    }
        
`