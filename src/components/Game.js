// src/components/Game.js
import React from "react";

import { Board } from "./Board";
import styled from "styled-components";

export const Game = () => {
  return (
    <Container className="game">
      <div className="game-board">
        <Board />
      </div>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
