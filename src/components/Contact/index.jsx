import React from "react";
import {
  AddressContainer,
  Button,
  Container,
  Form,
  FormContainer,
  Input,
  LeftForm,
  RightForm,
  Textarea,
  Wrapper,
  Title,
  AddressItem,
  Icon,
  Text,
} from "./Contact.styles";
import Phone from "../../Img/phone.png";
import Map from "../../Img/map.png";
import Send from "../../Img/send.png";

const Contact = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <FormContainer>
            <Title>
              Questions?
              <br />
              Let's Get In Touch!
            </Title>
            <Form>
              <LeftForm>
                <Input placeholder="Your Name" />
                <Input placeholder="Your Email" />
                <Input placeholder="Subject" />
              </LeftForm>
              <RightForm>
                <Textarea placeholder="Your Message" />
                <Button>Send</Button>
              </RightForm>
            </Form>
          </FormContainer>
          <AddressContainer>
            <AddressItem>
              <Icon src={Map} />
              <Text>123 Park Avenue St., New York, USA</Text>
            </AddressItem>
            <AddressItem>
              <Icon src={Phone} />
              <Text>+321 371-321 3287</Text>
              <Text>-</Text>
              <Text>+321 371-677 6325</Text>
            </AddressItem>
            <AddressItem>
              <Icon src={Send} />
              <Text>ozkanselcukwork@gmail.com</Text>
            </AddressItem>
          </AddressContainer>
        </Wrapper>
      </Container>
    </>
  );
};

export default Contact;
