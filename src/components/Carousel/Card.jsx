import { CARD_STYLE } from 'constants';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

export const Card = ({ title, cardIndex, currentIndex, transition }) => {
  const [myClass, setMyClass] = useState('');
  useEffect(() => {
    const getClassName = () => {
      if (cardIndex === currentIndex) {
        setMyClass('center');
      } else if (
        cardIndex === currentIndex - 1 ||
        cardIndex === currentIndex + 1
      ) {
        setMyClass('around');
      } else if (
        cardIndex === currentIndex - 2 ||
        cardIndex === currentIndex + 2
      ) {
        setMyClass('back');
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
  opacity: 0.7;
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
    transform: scale(0.7);
    z-index: 7;
  }
  &.back {
    transform: scale(0.4);
    z-index: 3;
  }
`;
