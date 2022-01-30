import { Carousel } from 'components/Carousel/Carousel';
import React from 'react';
import styled from 'styled-components';

export const MainPage = () => {
  return (
    <MainContainer>
      <Carousel />
    </MainContainer>
  );
};

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;
