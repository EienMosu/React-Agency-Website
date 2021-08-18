import React from "react";
import { Container, Image, Text } from "./MiniCard.styles";
import Search from "../../Img/search.png"

const MiniCard = () => {
  return (
    <Container>
      <Image src={Search}/>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Text>
    </Container>
  );
};

export default MiniCard;
