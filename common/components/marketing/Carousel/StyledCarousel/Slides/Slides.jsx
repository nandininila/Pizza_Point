import { SlideOne } from "./SlideOne";
import SlideTwo from "./SlideTwo";

export const Slides = ({ slide, i }) => {
  return (
    <>
      {i === 0 && <SlideOne slide={slide} />}
      {i === 1 && <SlideTwo slide={slide} />}
    </>
  );
};
