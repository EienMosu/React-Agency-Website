import styled from "styled-components";

export const Container = styled.div`
  width: 100px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  -webkit-box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.9);
  box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.9);

  @media only screen and (max-width: 768px) {
    width: 50px;
  }
`;

export const Image = styled.img`
  width: 20px;
`;

export const Text = styled.span`
  margin-top: 10px;
  text-align: center;

  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;
