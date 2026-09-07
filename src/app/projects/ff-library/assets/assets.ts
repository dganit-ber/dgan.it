import media01 from './01.png';
import media02 from './02.jpg';
import media03 from './03.png';
import media04 from './04.png';
import media05 from './05.png';
import media06 from './06.svg';

export const assetOne = media01;
export const assetTwo = media02;
export const assetThree = media03;
export const assetFour = media04;
export const assetFive = media05;
export const assetSix = media06;

// Slot 07 is the demo screen recording — served from /public/ff-library/ as
// mp4 + webm rather than a static import (Next doesn't bundle video imports).
export const demoVideo = {
  mp4: '/ff-library/demo.mp4',
  webm: '/ff-library/demo.webm',
  poster: '/ff-library/demo-poster.jpg',
};
