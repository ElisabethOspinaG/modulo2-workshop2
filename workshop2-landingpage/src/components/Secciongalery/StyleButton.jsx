import styled from "styled-components";

export const ButtonStyle = styled.div `

    display: none;
    
    @media screen and (max-width: 380px) {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 20px;

        button {
            padding: 10px 10px;
            width: 50%;
            background-color: white;
            border-color: black;
            font-size: 20px;
            
            :active {
                background-color: black;
                transition: background-color 0.1s ease-out;
                color: white;
                cursor: pointer;
                
            }
        }
    }
        
`