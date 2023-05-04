import React from "react";
import imgInteractive from "../../images/desktop/image-interactive.jpg";
import { MainInteractive } from "./StylesMain";
import { MainText } from "./StylesMain";
import { Title } from "./StylesMain";
import { Paragraph } from "./StylesMain";


const Main = () => {
  return (
    <MainInteractive>
    <div>
        <figure>
          <img src={imgInteractive} alt="interactivo" />
        </figure>
      </div>

      <MainText>
        <Title> THE LEADER IN INTERACTIVE VR</Title>
        <Paragraph>
          Founded in 2011, Loppstudios has ben producing world-class vitual
          reality proyects form some of the vest compalies around the globe. Our
          award-winning creations have transformed businesses through gital
          expeeriences that vind to their brand.
        </Paragraph>
      </MainText>
    </MainInteractive>
  );
};

export default Main;
