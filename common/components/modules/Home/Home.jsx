import About from "../../application/About/About";
import Chefs from "../../application/Chefs/Chefs";
import Commitment from "../../application/Commitment/Commitment";
import OurMenu from "../../application/Menu/OurMenu/OurMenu";
import Reservation from "../../application/Reservation/Reservation";
import Testimonial from "../../application/Testimonial/Testimonial";
import PizzaCards from "../../ecommerce/PizzaCards/PizzaCards";
import styles from "./Home.module.css";

const Home = () => {
  // const theme = useTheme();
  // let mode = theme.palette.mode;

  return (
    <main className={styles}>
      {/* <Carousel /> */}
      <OurMenu />
      <PizzaCards />
      <About />
      <Testimonial />
      <Chefs />
      <Commitment />
      <Reservation />
    </main>
  );
};

export default Home;
