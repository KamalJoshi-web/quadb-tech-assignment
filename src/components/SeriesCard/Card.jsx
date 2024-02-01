import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Card = ({ img, name, rating, id }) => {
  const navigate = useNavigate();

  const handleDetails = () => {
    navigate(`/details/${id}`);
  };

  return (
    <div className="  bg-gray-100   shadow-md rounded-md  ">
      <img src={img} alt="poster" className="mx-auto rounded-t-md" />
      <div className=" py-2 px-4 flex items-center gap-2">
        <FaStar className=" text-orange-300 text-xl" />
        <h3 className="font-bold   text-gray-600">{rating ? rating : "N/A"}</h3>
      </div>
      <h2 className=" font-bold  py-2 px-4">{name}</h2>
      <button
        className=" duration-200 my-2 mx-3 bg-blue-400 text-white font-semibold 
      uppercase tracking-widest px-6 py-1 rounded-lg hover:bg-blue-600 "
        onClick={handleDetails}
      >
        View More
      </button>
    </div>
  );
};

export default Card;
