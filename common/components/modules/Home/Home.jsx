import Carousel from "@/common/components/marketing/Carousel/StyledCarousel/StyledCarousel";
import OurMenu from "../../application/Menu/OurMenu/OurMenu";
import PizzaCards from "../../ecommerce/PizzaCards/PizzaCards";
import styles from "./Home.module.css";

const Home = ({ allServerData }) => {
  // const theme = useTheme();
  // let mode = theme.palette.mode;

  return (
    <main className={styles}>
      <Carousel />
      <OurMenu />
      <PizzaCards allServerData={allServerData} />
    </main>
  );
};

export default Home;
