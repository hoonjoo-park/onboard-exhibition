import { CARD_STYLE } from 'constants';
import React, { useRef } from 'react';
import styled from 'styled-components';

export const Card = () => {
  const cardRef = useRef();
  console.log(cardRef.current.offsetLeft, window.innerWidth / 2);
  return (
    <>
      <CardBox ref={cardRef}>
        <CardTitle>Card Title will be placed here</CardTitle>
      </CardBox>
    </>
  );
};

const CardBox = styled.li`
  position: relative;
  width: ${CARD_STYLE.width};
  height: ${CARD_STYLE.height};
  flex-shrink: 0;
  margin-right: 1rem;
  transform-style: preserve-3d;
  border-radius: ${CARD_STYLE.radius};
  background-color: dodgerblue;
`;

const CardTitle = styled.h3`
  position: absolute;
  bottom: -15%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 1.2rem;
  font-weight: 500;
`;
