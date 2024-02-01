import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Loader, ErrorCom, Card } from "../../components/index";

const Series = () => {
  const [seriesInfo, setSeriesInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState(false);

  useEffect(() => {
    const fetchSeriesData = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(
          "https://api.tvmaze.com/search/shows?q=all"
        );
        setLoading(false);
        setErrorMsg(false);
        setSeriesInfo(data);
        console.log(data);
      } catch (error) {
        setLoading(false);
        setErrorMsg(error.message);
      }
    };
    fetchSeriesData();
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (errorMsg) {
    return <ErrorCom msg={errorMsg} />;
  }

  return (
    <div>
      {/* Heading */}
      <h1 className=" text-center font-bold text-4xl py-5">
        Your Ultimate Guide to TV Series
      </h1>
      {/* SeriesCard */}
      <div className=" flex justify-evenly items-center gap-10 flex-wrap py-10">
        {seriesInfo.map((item) => (
          <Card
            key={item.show.id}
            img={item.show.image?.medium}
            rating={item.show.rating.average}
            name={item.show.name}
            id={item.show.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Series;
