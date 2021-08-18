import styled from "styled-components";

export const Container = styled.div`
  margin-right: 50px;
  padding: 20px;
  -webkit-box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.9);
  box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.9);
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 10px;
    padding: 10px;
  }
`;

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Price = styled.span`
  font-weight: 500;
  font-size: 50px;

  @media only screen and (max-width: 768px) {
    font-size: 30px;
  }
`;

export const Type = styled.button`
  font-weight: 500;
  padding: 10px;
  margin: 10px 0;
  border: 1.5px solid crimson;
  color: crimson;
  background-color: white;
  border-radius: 20px;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const List = styled.ul`
  list-style: none;
`;

export const ListItem = styled.li`
  margin: 30px 0;

  @media only screen and (max-width: 768px) {
    margin: 10px;
    font-size: 12px;
  }
`;

export const Button = styled.button`
  border: none;
  background-color: darkblue;
  color: white;
  font-size: 16px;
  padding: 15px;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 500;

  @media only screen and (max-width: 768px) {
    font-size: 12px;
    padding: 5px;
  }
`;
