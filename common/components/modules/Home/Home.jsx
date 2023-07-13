import Carousel from "@/common/components/marketing/Carousel/StyledCarousel/StyledCarousel";
import styles from "./Home.module.css";

const Home = () => {
  // const theme = useTheme();
  // let mode = theme.palette.mode;

  return (
    <main className={styles}>
      <Carousel />
    </main>
  );
};

export default Home;
