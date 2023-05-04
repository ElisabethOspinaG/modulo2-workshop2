import React from 'react';

import imgHeart from "../../images/desktop/image-deep-earth.jpg";
import imgNight from "../../images/desktop/image-night-arcade.jpg";
import imgSoccer from "../../images/desktop/image-soccer-team.jpg";
import imgGrid from "../../images/desktop/image-grid.jpg";
import imgAbove from "../../images/desktop/image-from-above.jpg";
import imgBorialis from "../../images/desktop/image-pocket-borealis.jpg";
import imgCuriosity from "../../images/desktop/image-curiosity.jpg";
import imgFisheye from "../../images/desktop/image-fisheye.jpg";
import { CardStyled } from './StyleCard';

const Galery = () => {
 
    const galeryImg = [
        {
            img: imgHeart,
            title: "DEEP HEARTH"
        },
        {
            img: imgNight,
            title: "NIGHT ARCADE"
        },
        {
            img: imgSoccer,
            title: "SOCCER TEAM VR"
        },
        {
            img: imgGrid,
            title: "THE GRID"
        },
        {
            img: imgAbove,
            title: "FROM UP ABOVE VR"
        },
        {
            img: imgBorialis,
            title: "POCKET BOREALIS"
        },
        {
            img: imgCuriosity,
            title: "THE CURIOSITY"
        },
        {
            img: imgFisheye,
            title: "MAKE IT FISHEYE"
        }

    ]
  return (
    <CardStyled>
        {
            galeryImg.map((card, index) => 
            <article key={`${card.title}-${index}`}>
                <figure>
                    <img src={card.img} alt={card.title} />
                </figure>
                <h4> {card.title} </h4>
            </article>
        )};
        
    </CardStyled>
  )
}

export default Galery