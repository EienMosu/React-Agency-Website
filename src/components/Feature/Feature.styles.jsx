import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    padding: 30px 20px;
  }
`;

export const Left = styled.div`
  width: 50%;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const Image = styled.img`
  width: 87%;
`;

export const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Title = styled.span`
  font-size: 70px;

  @media only screen and (max-width: 768px) {
    font-size: 50px;
  }
`;

export const SubTitle = styled.span`
  font-size: 24px;
  font-style: italic;
  color: #333;
  margin-top: 30px;
`;

export const Desc = styled.p`
  font-size: 20px;
  color: #777;
  margin-top: 30px;
`;

export const Button = styled.button`
  width: 150px;
  border: none;
  padding: 15px 20px;
  background-color: darkblue;
  color: white;
  font-size: 20px;
  border-radius: 20px;
  margin-top: 20px;
  cursor: pointer;
`;
