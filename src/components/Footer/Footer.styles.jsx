import styled from "styled-components";

export const Container = styled.div`
  height: 10%;
  background-color: #111;
  color: lightgray;
`;

export const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    padding: 10px;
  }
`;

export const List = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  list-style: none;
`;

export const ListItem = styled.li`
  margin-right: 20px;

  @media only screen and (max-width: 768px) {
    margin-right: 10px;
    font-size: 14px;
  }
`;

export const Copyright = styled.span`
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;
