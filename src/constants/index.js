export const CARDS = [6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3];

export const CARD_STYLE = {
  width: 35,
  height: 25,
  radius: '5px',
};

export const SLIDER_STYLE = {
  width: 73.5,
  height: 43,
  transition: 'transform 0.4s ease-in-out',
};

export const FIRST_INDEX = CARDS.indexOf(1);
export const LAST_INDEX = CARDS.lastIndexOf(8);
export const CENTER_IN_BOX = (SLIDER_STYLE.width - CARD_STYLE.width) / 2;
export const CALC = {
  firstPosition: FIRST_INDEX * CARD_STYLE.width - CENTER_IN_BOX,
  lastPosition: LAST_INDEX * CARD_STYLE.width - CENTER_IN_BOX,
};
// export const CENTER_INDEX = Math.floor(CARDS.length / 2);
