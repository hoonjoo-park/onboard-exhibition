import { CARD_STYLE, CARDS_INFO } from 'constants';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FaGithub, FaChrome } from 'react-icons/fa';

export const Card = ({ actualNum, cardIndex, currentIndex, transition }) => {
  const [myClass, setMyClass] = useState('');
  let { title, desc, link, git, image } = CARDS_INFO[actualNum];
  const handleLink = (e) => {
    if (e.currentTarget.className === 'git') {
      window.open(git);
    } else if (e.currentTarget.className === 'chrome') {
      window.open(link);
    }
  };
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
    <CardBox className={myClass} transition={transition} imgUrl={image}>
      <Background src={image} alt='background' />
      <h3>{title}</h3>
      <p>{desc}</p>
      <ButtonBox>
        <button className='chrome' onClick={(e) => handleLink(e)}>
          <FaChrome /> <span>링크</span>
        </button>
        <button className='git' onClick={(e) => handleLink(e)}>
          <FaGithub /> <span>깃헙</span>
        </button>
      </ButtonBox>
    </CardBox>
  );
};

const CardBox = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-shrink: 0;
  width: ${CARD_STYLE.width}rem;
  height: ${CARD_STYLE.height}rem;
  border-radius: ${CARD_STYLE.radius};
  /* background-image: ${(props) => `url(${props.image})`}; */
  /* background-color: dodgerblue; */
  z-index: 10;
  transition: ${(props) => props.transition};
  -webkit-box-reflect: below 10px -webkit-gradient(linear, left top, left bottom, from(transparent), color-stop(80%, transparent), to(rgba(255, 255, 255, 0.15)));
  h3,
  p {
    position: absolute;
    left: 5%;
    color: #ffffff;
  }
  h3 {
    font-size: 1.8em;
    font-weight: 700;
    bottom: 28%;
  }
  p {
    font-size: 1em;
    text-overflow: ellipsis;
    white-space: nowrap;
    bottom: 20%;
  }
  &.center {
    transform: scale(1);
    z-index: 10;
  }
  &.around {
    z-index: 7;
    filter: brightness(0.6);
  }
  &.around.left {
    transform: scale(0.8) translateX(${CARD_STYLE.width / 1.5}rem);
  }
  &.around.right {
    transform: scale(0.8) translateX(-${CARD_STYLE.width / 1.5}rem);
  }
  &.back {
    z-index: 3;
    filter: brightness(0.6) blur(1px);
  }
  &.back.left {
    transform: scale(0.7) translateX(${CARD_STYLE.width * 1.5}rem);
  }
  &.back.right {
    transform: scale(0.7) translateX(-${CARD_STYLE.width * 1.5}rem);
  }
`;

const Background = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border-radius: ${CARD_STYLE.radius};
`;

const ButtonBox = styled.ul`
  display: flex;
  justify-content: space-between;
  position: absolute;
  width: 13rem;
  height: 2.5rem;
  left: 5%;
  bottom: 5%;
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 6rem;
    border-radius: 5px;
    color: #ffffff;
    font-size: 0.9rem;
    padding: 0 1em;
    vertical-align: middle;
    & svg {
      margin-right: 0.45rem;
      font-size: 1.1rem;
    }
    & span {
      padding-top: 0.1em;
    }
  }
  button.chrome {
    background-color: #4078c0;
  }
  button.git {
    background-color: #6e5494;
  }
`;
