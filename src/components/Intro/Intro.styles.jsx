import styled from "styled-components";

export const Container = styled.div`
  height: calc(100vh - 50px);
  display: flex;
  padding: 20px;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Left = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;

export const Title = styled.h1`
  font-size: 60px;
  width: 60%;

  @media only screen and (max-width: 768px) {
    width: 90%;
    font-size: 45px;
  }
`;

export const Desc = styled.p`
  width: 60%;
  font-size: 20px;
  margin-top: 20px;

  @media only screen and (max-width: 768px) {
    width: 90%;
    font-size: 15px;
  }
`;

export const Info = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;

  @media only screen and (max-width: 768px) {
    width: 90%;
  }
`;
export const Button = styled.button`
  padding: 15px;
  background-color: darkblue;
  color: white;
  border-radius: 10px;
  font-weight: 500;
  border: none;
  cursor: pointer;
  letter-spacing: 1px;

  @media only screen and (max-width: 768px) {
    margin-right: 10px;
  }
`;

export const Contact = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Phone = styled.span`
  color: #f0667d;
  font-weight: 500;
`;

export const ContactText = styled.span`
  color: gray;
  margin-top: 5px;
`;

export const Right = styled.div`
  width: 40%;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const Image = styled.img`
  width: 100%;
`;
