import React from "react";
import PriceCard from "../PriceCard";
import { Container } from "./Price.styles";

const Price = () => {
  return (
    <>
      <Container>
          <PriceCard price="10" type="Basic" />
          <PriceCard price="20" type="Premium" />
          <PriceCard price="30" type="Advanced" />
      </Container>
    </>
  );
};

export default Price;
