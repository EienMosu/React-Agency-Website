import styled from "styled-components";

export const Container = styled.div`
  height: 90%;
  background: url("https://wallpaper.dog/large/5486500.png");
  background-size: cover;
`;

export const Wrapper = styled.div`
  height: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const FormContainer = styled.div`
  width: 50%;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Title = styled.h1`
  margin: 50px;
  margin-top: 0;

  @media only screen and (max-width: 768px) {
    margin: 20px;
  }
`;

export const Form = styled.form`
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LeftForm = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 20px;

  @media only screen and (max-width: 768px) {
    height: 50%;
    margin-right: 0;
  }
`;

export const RightForm = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    height: 50%;
  }
`;

export const Input = styled.input`
  width: 200px;
  padding: 20px;

  @media only screen and (max-width: 768px) {
    padding: 5px;
  }
`;

export const Textarea = styled.textarea`
  width: 200px;
  height: 60%;
  padding: 20px;

  @media only screen and (max-width: 768px) {
    padding: 5px;
    margin-top: 20px;
  }
`;

export const Button = styled.button`
  border: none;
  padding: 15px;
  background-color: darkblue;
  color: white;
  font-size: 20px;
  border-radius: 10px;
  margin-top: 20px;
  cursor: pointer;

  @media only screen and (max-width: 768px) {
    padding: 5px;
    font-size: 14px;
  }
`;

export const AddressContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
    margin-top: 20px;
  }
`;

export const AddressItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;

  @media only screen and (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

export const Icon = styled.img`
  width: 25px;
  margin-right: 20px;

  @media only screen and (max-width: 768px) {
    width: 20px;
  }
`;

export const Text = styled.span`
  font-size: 20px;
  margin-right: 15px;

  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;
