import React from 'react';
import { galeryImg } from '../../data/data';
import data from '../../data/data';


import imgHeart from "../../images/desktop/image-deep-earth.jpg";
import imgHeartMobil from "../../images/mobile/image-deep-earth.jpg";

import imgNight from "../../images/desktop/image-night-arcade.jpg";
import imgNightMobil from "../../images/mobile/image-night-arcade.jpg";

import imgSoccer from "../../images/desktop/image-soccer-team.jpg";
import imgSoccerMobil from "../../images/mobile/image-soccer-team.jpg";

import imgGrid from "../../images/desktop/image-grid.jpg";
import imgGridMobil from "../../images/mobile/image-grid.jpg";

import imgAbove from "../../images/desktop/image-from-above.jpg";
import imgAboveMobil from "../../images/mobile/image-from-above.jpg";

import imgBorialis from "../../images/desktop/image-pocket-borealis.jpg";
import imgBorialisMobil from "../../images/mobile/image-pocket-borealis.jpg";

import imgCuriosity from "../../images/desktop/image-curiosity.jpg";
import imgCuriosityMobil from "../../images/mobile/image-curiosity.jpg";

import imgFisheye from "../../images/desktop/image-fisheye.jpg";
import imgFisheyeMobil from "../../images/mobile/image-fisheye.jpg";

import { CardStyled } from './StyleCard';

const Galery = () => {

    const galeryImg = [
        {
            id: 1,
            img: imgHeart,
            imgMobil: imgHeartMobil,
            title: "DEEP HEARTH"
        },
        {
            id: 2,
            img: imgNight,
            imgMobil: imgNightMobil,
            title: "NIGHT ARCADE"
        },
        {
            id: 3,
            img: imgSoccer,
            imgMobil: imgSoccerMobil,
            title: "SOCCER TEAM VR"
        },
        {
            id: 4,
            img: imgGrid,
            imgMobil: imgGridMobil,
            title: "THE GRID"
        },
        {
            id: 5,
            img: imgAbove,
            imgMobil: imgAboveMobil,
            title: "FROM UP ABOVE VR"
        },
        {
            id: 6,
            img: imgBorialis,
            imgMobil: imgBorialisMobil,
            title: "POCKET BOREALIS"
        },
        {
            id: 7,
            img: imgCuriosity,
            imgMobil: imgCuriosityMobil,
            title: "THE CURIOSITY"
        },
        {
            id: 8,
            img: imgFisheye,
            imgMobil: imgFisheyeMobil,
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
                            <imgMobil src={card.imgMobil} alt={card.title} />
                        </figure>
                        <h4> {card.title} </h4>
                    </article>
                )}
        </CardStyled>
    )
}

export default Galery