import React, { useState } from "react";
import Card from "../../components/Card";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";

type Props = {};

const Search = (props: Props) => {
  const currency = process.env.REACT_APP_CURRENCY;
  const { query } = useParams();
  const [endpoint, setEndpoint] = useState(`/eventspercurrency/${currency}`);
  const { data, loading } = useFetch(endpoint);

  const onTabChange = (tab: string) => {
    setEndpoint(
      tab === "This Week" ? `/eventspercurrency/${currency}` : `/weekly/events`
    );
  };
  return (
    <Card
      title={`Search Results for ${query}`}
      data={data?.data}
      loading={loading}
    />
  );
};

export default Search;
