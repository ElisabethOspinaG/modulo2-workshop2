import React from "react";
import imgInteractive from "../../images/desktop/image-interactive.jpg";
import { MainInteractive } from "./StylesMain";
import { MainText } from "./StylesMain";
import { Title } from "./StylesMain";
import { Paragraph } from "./StylesMain";


const Main = () => {
  return (
    <MainInteractive>
      <figure>
        <img src={imgInteractive} alt="interactivo" />
      </figure>

      <MainText>
        <Title> THE LEADER IN INTERACTIVE VR</Title>
        <Paragraph>
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects form some of the vest companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </Paragraph>
      </MainText>
    </MainInteractive>
  );
};

export default Main;
