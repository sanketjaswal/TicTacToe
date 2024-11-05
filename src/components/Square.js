import React from "react";

import { styled } from "styled-components";

export const Square = ({ value, onClick }) => {
  return <Container onClick={onClick}>{value}</Container>;
};

const Container = styled.div`
  width: 60px;
  height: 60px;
  background-color: #ddd;
  margin: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: white;
  cursor: pointer;

  :hover {
    background-color: red;
  }
`;
