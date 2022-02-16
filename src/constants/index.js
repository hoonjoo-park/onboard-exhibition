import {
  Beef,
  Calculator,
  Gifticon,
  House,
  Manufacture,
  Messenger,
  Study,
} from 'images/image';

export const CARDS = [6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3];

export const CARDS_INFO = {
  1: {
    title: '환율 계산기',
    desc: 'API를 활용한 실시간 환율계산기',
    link: 'http://beefplz.s3-website.ap-northeast-2.amazonaws.com/',
    git: 'https://github.com/hoonjoo-park/Currency-Converter',
    image: Calculator,
  },
  2: {
    title: '상품 등록 관리자 페이지',
    desc: '소고기 판매 플랫폼의 관리자 페이지를 가정하여 상품 등록 페이지를 구현',
    link: 'https://wanted-admin-product.netlify.app/',
    git: 'https://github.com/hoonjoo-park/admin-product-regist',
    image: Beef,
  },
  3: {
    title: '제 방을 소개합니다',
    desc: '인테리어 및  가구판매 플랫폼의 제품 소개 컴포넌트를 구현',
    link: 'https://house-deco.netlify.app/',
    git: 'https://github.com/hoonjoo-park/House-Decoration',
    image: House,
  },
  4: {
    title: '제조업 견적 요청 페이지',
    desc: '필터링과 토글 기능으로 조건에 맞는 견적 요청서가 보여지는 웹페이지',
    link: 'https://estimate-board-page.herokuapp.com/',
    git: 'https://github.com/hoonjoo-park/estimate-board',
    image: Manufacture,
  },
  5: {
    title: '메신저 웹',
    desc: 'Redux를 활용한 웹 메신저',
    link: 'https://messenger-web-b98e6.web.app/',
    git: 'https://github.com/hoonjoo-park/messenger-web',
    image: Messenger,
  },
  6: {
    title: '기프티콘 거래 플랫폼',
    desc: '기프티콘을 거래할 수 있는 웹페이지를 구현',
    link: 'https://gifticon-market.vercel.app/',
    git: 'https://github.com/hoonjoo-park/gifticon-market',
    image: Gifticon,
  },
  7: {
    title: '제작 예정',
    desc: '소고기 판매 플랫폼의 관리자 페이지를 가정하여 상품 등록 페이지를 구현',
    link: 'https://wanted-admin-product.netlify.app/',
    git: 'https://github.com/hoonjoo-park/admin-product-regist',
    image: House,
  },
  8: {
    title: '제작 예정',
    desc: '소고기 판매 플랫폼의 관리자 페이지를 가정하여 상품 등록 페이지를 구현',
    link: 'https://wanted-admin-product.netlify.app/',
    git: 'https://github.com/hoonjoo-park/admin-product-regist',
    image: Study,
  },
};

export const CARD_STYLE = {
  width: 35,
  height: 25,
  radius: '5px',
};

export const SLIDER_STYLE = {
  width: 73.5,
  height: 43,
  transition: 'transform 0.3s ease-in-out',
};

export const FIRST_INDEX = CARDS.indexOf(1);
export const LAST_INDEX = CARDS.lastIndexOf(8);
export const CENTER_IN_BOX = (SLIDER_STYLE.width - CARD_STYLE.width) / 2;
export const CALC = {
  firstPosition: FIRST_INDEX * CARD_STYLE.width - CENTER_IN_BOX,
  lastPosition: LAST_INDEX * CARD_STYLE.width - CENTER_IN_BOX,
};
