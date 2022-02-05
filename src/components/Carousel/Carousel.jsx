import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { Card } from './Card';
import {
  CARDS,
  SLIDER_STYLE,
  FIRST_INDEX,
  CARD_STYLE,
  CALC,
  LAST_INDEX,
} from 'constants';

export const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(FIRST_INDEX);
  const [move, setMove] = useState(CALC.firstPosition);
  const [transition, setTransition] = useState(SLIDER_STYLE.transition);
  const [allowMove, setAllowMove] = useState(true);
  const moveLeft = () => {
    if (currentIndex < FIRST_INDEX || !allowMove) {
      return;
    }
    setTransition(SLIDER_STYLE.transition);
    setCurrentIndex((el) => el - 1);
    setMove((distance) => distance - CARD_STYLE.width);
    setAllowMove(false);
  };
  const moveRight = (e) => {
    if (currentIndex > LAST_INDEX || !allowMove) {
      return;
    }
    setTransition(SLIDER_STYLE.transition);
    setCurrentIndex((el) => el + 1);
    setMove((distance) => distance + CARD_STYLE.width);
    setAllowMove(false);
  };
  const handleFlip = () => {
    if (currentIndex < FIRST_INDEX) {
      setTransition('none');
      setTimeout(() => {
        setCurrentIndex(LAST_INDEX);
        setMove(CALC.lastPosition);
      }, 100);
    } else if (currentIndex > LAST_INDEX) {
      setTransition('none');
      setTimeout(() => {
        setCurrentIndex(FIRST_INDEX);
        setMove(CALC.firstPosition);
      }, 100);
    }
    setAllowMove(true);
  };
  const buttonRef = useRef();
  useEffect(() => {
    buttonRef.current.focus();
  }, []);
  const handleKeyDown = (e) => {
    if (e.keyCode === 37) {
      moveLeft();
      return;
    } else if (e.keyCode === 39) {
      moveRight();
      return;
    }
  };
  return (
    <CarouselBox>
      <Button
        className='leftArrow'
        onClick={moveLeft}
        onKeyDown={(e) => handleKeyDown(e)}
        tabIndex={0}
        ref={buttonRef}
      >
        <MdKeyboardArrowLeft />
      </Button>
      <Button
        className='rightArrow'
        onClick={moveRight}
        onKeyDown={(e) => handleKeyDown(e)}
        tabIndex={0}
        ref={buttonRef}
      >
        <MdKeyboardArrowRight />
      </Button>
      <Slider move={move} transition={transition} onTransitionEnd={handleFlip}>
        {CARDS.map((card, i) => (
          <Card
            key={i}
            actualNum={card}
            cardIndex={i}
            currentIndex={currentIndex}
            transition={transition}
          />
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
  overflow: hidden;
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
  transition: ${(props) => props.transition};
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
