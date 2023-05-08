import React from 'react';
import { StylesCardsMobile } from './StyledGaleryMobile';
import imgHeartMobil from "../../images/mobile/image-deep-earth.jpg";
import imgNightMobil from "../../images/mobile/image-night-arcade.jpg";
import imgSoccerMobil from "../../images/mobile/image-soccer-team.jpg";
import imgGridMobil from "../../images/mobile/image-grid.jpg";
import imgAboveMobil from "../../images/mobile/image-from-above.jpg";
import imgBorialisMobil from "../../images/mobile/image-pocket-borealis.jpg";
import imgCuriosityMobil from "../../images/mobile/image-curiosity.jpg";
import imgFisheyeMobil from "../../images/mobile/image-fisheye.jpg";



const GaleryMobile = () => {

    const galeryImg = [
        {
            id: 1,
            
            imgMobil: imgHeartMobil,
            title: "DEEP HEARTH"
        },
        {
            id: 2,
            imgMobil: imgNightMobil,
            title: "NIGHT ARCADE"
        },
        {
            id: 3,
            imgMobil: imgSoccerMobil,
            title: "SOCCER TEAM VR"
        },
        {
            id: 4,
            imgMobil: imgGridMobil,
            title: "THE GRID"
        },
        {
            id: 5,
            imgMobil: imgAboveMobil,
            title: "FROM UP ABOVE VR"
        },
        {
            id: 6,
            imgMobil: imgBorialisMobil,
            title: "POCKET BOREALIS"
        },
        {
            id: 7,
            imgMobil: imgCuriosityMobil,
            title: "THE CURIOSITY"
        },
        {
            id: 8,
            imgMobil: imgFisheyeMobil,
            title: "MAKE IT FISHEYE"
        }
    ]
    return (

        <StylesCardsMobile>
            
            {
                galeryImg.map((card, index) =>
                    <article key={`${card.title}-${index}`}>
                        <figure>
                            <img src={card.imgMobil} alt={card.title} />
                        </figure>
                        <h4> {card.title} </h4>
                    </article>
                )}
        </StylesCardsMobile>
    )
}

export default GaleryMobile