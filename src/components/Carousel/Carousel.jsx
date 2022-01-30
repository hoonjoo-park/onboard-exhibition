import React, { useState } from 'react';
import styled from 'styled-components';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { CARDS } from 'constants';
import { Card } from './Card';

export const Carousel = () => {
  const [cardIdx, setCardIdx] = useState(1);
  return (
    <CarouselBox>
      <Slider>
        <Button className='leftArrow'>
          <MdKeyboardArrowLeft />
        </Button>
        <Button className='rightArrow'>
          <MdKeyboardArrowRight />
        </Button>
        {CARDS.map((card, i) => (
          <Card key={i} />
        ))}
      </Slider>
    </CarouselBox>
  );
};

const CarouselBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 35vh;
`;
const Slider = styled.ul`
  position: relative;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  overflow-x: hidden;
  overflow-y: visible;
  justify-content: center;
  width: 100vw;
  height: 100%;
  perspective: 500px;
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
