import { CARD_STYLE } from 'constants';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

export const Card = ({ title, cardIndex, currentIndex, transition }) => {
  const [myClass, setMyClass] = useState('');
  useEffect(() => {
    const getClassName = () => {
      if (cardIndex === currentIndex) {
        setMyClass('center');
      } else if (cardIndex === currentIndex - 1) {
        setMyClass('around left');
      } else if (cardIndex === currentIndex + 1) {
        setMyClass('around right');
      } else if (cardIndex === currentIndex - 2) {
        setMyClass('back left');
      } else if (cardIndex === currentIndex + 2) {
        setMyClass('back right');
      } else {
        setMyClass('');
      }
    };
    getClassName();
  }, [currentIndex, cardIndex]);
  return (
    <CardBox className={myClass} transition={transition}>
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
  /* opacity: 0.7; */
  z-index: 10;
  transition: ${(props) => props.transition};
  h1 {
    font-size: 2rem;
  }
  &.center {
    transform: scale(1);
    z-index: 10;
  }
  &.around {
    z-index: 7;
  }
  &.around.left {
    transform: scale(0.8) translateX(${CARD_STYLE.width / 1.5}rem);
  }
  &.around.right {
    transform: scale(0.8) translateX(-${CARD_STYLE.width / 1.5}rem);
  }
  &.back {
    z-index: 3;
  }
  &.back.left {
    transform: scale(0.7) translateX(${CARD_STYLE.width * 1.5}rem);
  }
  &.back.right {
    transform: scale(0.7) translateX(-${CARD_STYLE.width * 1.5}rem);
  }
`;
