import styled from "styled-components";
import imghero from '../../images/desktop/image-hero.jpg'


export const HeaderBac = styled.header`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
    height: 90vh;
    background-image: url(${imghero});
    background-size: cover;
    background-position: center;
`;