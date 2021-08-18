import React from "react";
import {
  Button,
  Container,
  Desc,
  Image,
  Left,
  Right,
  SubTitle,
  Title,
} from "./Feature.styles";
import App from "../../Img/app.png";
import AnimatedShapes from "../AnimatedShapes";

const Feature = () => {
  return (
    <Container>
      <Left>
        <Image src={App} />
      </Left>
      <Right>
        <Title>
          <b>good</b> design <br />
          <b>good</b> business
        </Title>
        <SubTitle>We know that good design means good business.</SubTitle>
        <Desc>
          We help our clients succeed by creating brand identities, digital
          experiances, and print materials that communicate cleary, achieve
          marketing goals, and look fantastic.
        </Desc>
        <Desc>
          We care your business and guarantee you to achieve marketing goals.
        </Desc>
        <Button>Learn More</Button>
      </Right>
      <AnimatedShapes />
    </Container>
  );
};

export default Feature;
