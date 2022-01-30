import React, { useState } from 'react';
import styled from 'styled-components';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { CARDS } from 'constants';
import { Card } from './Card';
import { SLIDER_STYLE } from 'constants';
import { FIRST_INDEX } from 'constants';
import { CARD_STYLE } from 'constants';
import { CALC } from 'constants';
import { LAST_INDEX } from 'constants';

export const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(FIRST_INDEX);
  const [move, setMove] = useState(CALC.firstPosition);
  const moveLeft = () => {
    if (currentIndex < FIRST_INDEX) {
      setCurrentIndex(LAST_INDEX);
      setMove(CALC.lastPosition);
      return;
    }
    setCurrentIndex((el) => el - 1);
  };
  const moveRight = () => {
    if (currentIndex > LAST_INDEX) {
      setCurrentIndex(FIRST_INDEX);
      setMove(CALC.firstPosition);
      return;
    }
    setCurrentIndex((el) => el + 1);
  };
  console.log(currentIndex, move);
  return (
    <CarouselBox>
      <Button className='leftArrow' onClick={moveLeft}>
        <MdKeyboardArrowLeft />
      </Button>
      <Button className='rightArrow' onClick={moveRight}>
        <MdKeyboardArrowRight />
      </Button>
      <Slider move={move}>
        {CARDS.map((card, i) => (
          <Card key={i} title={card} />
        ))}
      </Slider>
    </CarouselBox>
  );
};

const CarouselBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${SLIDER_STYLE.width}rem;
  height: ${SLIDER_STYLE.height}rem;
  overflow: scroll;
`;
const Slider = styled.ul`
  position: relative;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  transform: ${(props) => `translateX(-${props.move}rem)`};
`;

const Button = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  background-color: #d1d1d1;
  opacity: 0.7;
  border-radius: 50%;
  z-index: 5;
  svg {
    font-size: 1.5rem;
  }
  &.leftArrow {
    left: 10%;
  }
  &.rightArrow {
    right: 10%;
  }
`;
