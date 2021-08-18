import React from "react";
import {
  Button,
  Contact,
  ContactText,
  Container,
  Desc,
  Image,
  Info,
  Left,
  Phone,
  Right,
  Title,
} from "./Intro.styles";
import Woman from "../../Img/woman.png";
import AnimatedShapes from "../AnimatedShapes";

const Intro = () => {
  return (
    <Container>
      <Left>
        <Title>Adventures in creative age</Title>
        <Desc>
          We believe that desingning products and services in close partnership
          with our clients is the only way to have a real impact on their
          business.
        </Desc>
        <Info>
          <Button>START A PROJECT</Button>
          <Contact>
            <Phone>Call Us +(012) 345 - 6789</Phone>
            <ContactText>For any question or concern</ContactText>
          </Contact>
        </Info>
      </Left>
      <Right>
        <Image src={Woman} />
      </Right>
      <AnimatedShapes />
    </Container>
  );
};

export default Intro;
