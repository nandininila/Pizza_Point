import { SlideOne } from "./SlideOne";
import SlideThree from "./SlideThree";
import SlideTwo from "./SlideTwo";

export const Slides = ({ slide, i }) => {
  return (
    <>
      {i === 0 && <SlideOne slide={slide} />}
      {i === 1 && <SlideTwo slide={slide} />}
      {i === 2 && <SlideThree slide={slide} />}
    </>
  );
};
