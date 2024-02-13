import HeroBanner from "../../components/HeroBanner";
import Popular from "../../components/Popular";
import TopRated from "../../components/TopRated";
import Trending from "../../components/Trending";

type Props = {};

const Home = (props: Props) => {
  return (
    <div className="">
      <HeroBanner />
      <Trending />
      <Popular />
      <TopRated />
    </div>
  );
};

export default Home;
