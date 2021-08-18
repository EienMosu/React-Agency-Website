import React, { useState } from "react";
import {
  Button,
  CardContainer,
  CloseButton,
  Container,
  Desc,
  Icon,
  Image,
  Left,
  Modal,
  Right,
  Title,
  Video,
  Wrapper,
} from "./Service.styles";

import How from "../../Img/how.png";
import Play from "../../Img/play.png";

import MiniCard from "../MiniCard";

import YouTube from "react-youtube";

const Service = () => {
  const [open, setOpen] = useState(false);
  const smallScreen = window.screen.width <= 768 ? true : false;

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 0,
      rel: 0,
    },
  };

  return (
    <>
      <Container>
        <Left>
          <Image open={open} src={How} />
          <Video open={open}>
            <YouTube videoId="BtIKALj3IoU" opts={opts} onPause={open} />
          </Video>
        </Left>
        <Right>
          <Wrapper>
            <Title>Simple process to start</Title>
            <Desc>
              We provide digital experiance services to startups and small
              businesses to looking for a partner of their digital media, design
              & development, lead generation and communications requirents. We
              work with you, not for you. Although we have a great resources.
            </Desc>
            <CardContainer>
              <MiniCard />
              <MiniCard />
              <MiniCard />
            </CardContainer>
            <Button onClick={() => setOpen(!open)}>
              <Icon src={Play} />
              How it Works
            </Button>
          </Wrapper>
        </Right>
        {smallScreen && open && (
          <Modal>
            <Video open={open}>
              <CloseButton onClick={() => setOpen(false)}>Close</CloseButton>
              <YouTube videoId="BtIKALj3IoU" opts={opts} onPause={open} />
            </Video>
          </Modal>
        )}
      </Container>
    </>
  );
};

export default Service;
