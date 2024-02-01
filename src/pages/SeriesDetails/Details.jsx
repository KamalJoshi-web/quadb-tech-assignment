import { useEffect, useState } from "react";
import { Loader, ErrorCom } from "../../components";
import axios from "axios";
import { useParams } from "react-router-dom";
import { AiFillAudio, AiFillStar } from "react-icons/ai";

const Details = () => {
  const { id } = useParams();
  const [info, setInfo] = useState({});
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState(false);

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(`https://api.tvmaze.com/shows/${id}`);
        setInfo(data);
        setLoading(false);
        setErrorMsg(false);
        console.log(data);
      } catch (error) {
        setLoading(false);
        setErrorMsg(error.message);
      }
    };
    fetchInfo();
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (errorMsg) {
    return <ErrorCom msg={errorMsg} />;
  }

  return (
    <div className=" min-h-screen py-10">
      <h1 className=" text-5xl font-extrabold tracking-widest text-gray-700 max-md:text-3xl">
        {info.name}
      </h1>
      <div className=" flex gap-5 items-start max-md:flex-wrap my-10">
        <img src={info.image?.medium} alt="poster" className=" " />
        <div>
          <p className=" text-lg font-medium tracking-widest   text-gray-700 ">
            {info.summary.replace(/(<([^>]+)>)/gi, "")}
          </p>
          <div className=" my-5 flex flex-col gap-2">
            <span className=" inline-flex items-center gap-2">
              <AiFillAudio />
              <h6 className=" font-medium text-gray-700">{info.language}</h6>
            </span>
            <span>
              <h6 className=" capitalize font-semibold">genres</h6>
              <p className=" font-medium text-gray-700 my-1">
                {info.genres?.toString()}
              </p>
            </span>
            <span className=" inline-flex items-center gap-2">
              <AiFillStar className=" text-orange-500" />
              <h6 className=" font-medium text-gray-700">
                {info.rating.average ? info.rating.average : "N/A"}
              </h6>
            </span>
          </div>
          <a
            href={info.officialSite}
            target="_blank"
            rel="noreferrer"
            className=" w-full cursor-pointer duration-200  bg-blue-400 text-white font-semibold 
      uppercase tracking-widest px-6 py-1 rounded-lg hover:bg-blue-600 "
          >
            Watch Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Details;
