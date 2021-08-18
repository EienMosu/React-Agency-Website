import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100%;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Left = styled.div`
  width: 50%;
  position: relative;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const Image = styled.img`
  display: ${(props) => props.open && "none"};
  margin-left: 150px;
  height: 100%;
`;

export const Video = styled.div`
  display: ${(props) => !props.open && "none"};
  height: 300px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  margin: auto;

  @media only screen and (max-width: 768px) {
    width: 100%;
    left: 0;
  }
`;

export const Right = styled.div`
  width: 50%;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 768px) {
    padding: 20px;
  }
`;

export const Title = styled.h1``;

export const Desc = styled.p`
  font-size: 20px;
  margin-top: 20px;
  color: #555;
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`;

export const Button = styled.button`
  width: 180px;
  border: none;
  border-radius: 10px;
  background-color: darkblue;
  color: white;
  font-size: 20px;
  padding: 15px;
  margin-top: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const Icon = styled.img`
  width: 20px;
  margin-right: 5px;
`;

export const Modal = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const CloseButton = styled.button `
  position: absolute;
  background-color: white;
  padding: 5px;
  border: none;
  border-radius: 5px;
  right: 0;
  top: 0;
`