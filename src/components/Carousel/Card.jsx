import { CARD_STYLE } from 'constants';
import React from 'react';
import styled from 'styled-components';

export const Card = ({ title }) => {
  return (
    <CardBox>
      <h1>{title}</h1>
    </CardBox>
  );
};

const CardBox = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-shrink: 0;
  width: ${CARD_STYLE.width}rem;
  height: ${CARD_STYLE.height}rem;
  border: 2px solid tomato;
  border-radius: ${CARD_STYLE.radius};
  background-color: dodgerblue;
  opacity: 0.7;
  h1 {
    font-size: 2rem;
  }
`;
