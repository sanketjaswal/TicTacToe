// src/components/Board.js
import React, { useState } from "react";
import styled from "styled-components";
import { Square } from "./Square";
import { calculateWinner } from "../Utils/calculateWinner";

export const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const varOcg = isXNext ? "X" : "O";
  const winner = calculateWinner(squares);

  function handleClick(index) {
    if (squares[index] || winner) return;

    const newSquares = squares.slice();
    newSquares[index] = varOcg;
    setSquares(newSquares);
    setIsXNext(!isXNext);
  }

  function handleReset() {
    setSquares(Array(9).fill(null));
    setIsXNext(true);
  }

  return (
    <Container className="gameBoard">
      <Heading id="statusArea" className="status">
        Next player: <span>{isXNext ? "X" : "O"}</span>
      </Heading>
      <Heading id="winnerArea" className="winner">
        Winner: <span>{winner ? winner : "None"}</span>
      </Heading>
      <Button onClick={handleReset}>Reset</Button>
      <TheBoard>
        {[0, 3, 6].map((rowStart) => (
          <Row key={rowStart} className="board-row">
            {squares.slice(rowStart, rowStart + 3).map((square, idx) => (
              <Square
                key={rowStart + idx}
                value={square}
                onClick={() => handleClick(rowStart + idx)}
              />
            ))}
          </Row>
        ))}
      </TheBoard>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Heading = styled.div`
  margin-top: 5px;
  margin-bottom: 5px;
  font-weight: bold;
  font-size: 16px;
`;

const Button = styled.button`
  margin-top: 15px;
  margin-bottom: 16px;
  width: 80px;
  height: 40px;
  background-color: #8acaca;
  color: white;
  font-size: 16px;
  border: none;
  cursor: pointer;
`;

const TheBoard = styled.div`
  background-color: #eee;
  width: 208px;
  display: flex;
  flex-direction: column;
  border: 3px #eee solid;
  align-items: center;
  justify-content: center;
`;

const Row = styled.div`
  display: flex;
`;
