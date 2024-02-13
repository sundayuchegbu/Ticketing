import { useState } from "react";
import Carousel from "../../components/Carousel";
import ContentWrapper from "../../components/ContentWrapper";
import SwitchTabs from "../../components/SwitchTabs";
import useFetch from "../../hooks/useFetch";

const Popular = () => {
  const currency = process.env.REACT_APP_CURRENCY;
  const [endpoint, setEndpoint] = useState(currency);
  //const { data, loading } = useFetch(`/${endpoint}/events`);
  const { data, loading } = useFetch(`/eventspercurrency/${endpoint}`);

  const onTabChange = (tab: string) => {
    // setEndpoint(tab === "Weekly" ? "weekly" : "monthly");
    setEndpoint(tab === "This Week" ? endpoint : endpoint);
  };

  const popularData = data?.data.slice(0).reverse(); //slice(-5)

  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">Popular Events</span>
        <SwitchTabs
          data={["This Week", "This Month"]}
          onTabChange={onTabChange}
        />
      </ContentWrapper>
      <Carousel data={popularData} loading={loading} />
    </div>
  );
};

export default Popular;
