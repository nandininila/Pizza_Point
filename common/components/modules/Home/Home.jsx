import About from "../../application/About/About";
import Chefs from "../../application/Chefs/Chefs";
import OurMenu from "../../application/Menu/OurMenu/OurMenu";
import Testimonial from "../../application/Testimonial/Testimonial";
import PizzaCards from "../../ecommerce/PizzaCards/PizzaCards";
import styles from "./Home.module.css";

const Home = ({ allServerData }) => {
  // const theme = useTheme();
  // let mode = theme.palette.mode;

  return (
    <main className={styles}>
      {/* <Carousel /> */}
      <OurMenu />
      <PizzaCards allServerData={allServerData} />
      <About />
      <Testimonial />
      <Chefs />
    </main>
  );
};

export default Home;
