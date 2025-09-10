import { BsFillCaretLeftFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
const BackBtn = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <button className=" flex pl-10 items-center" onClick={goBack}>
      <BsFillCaretLeftFill className=" text-pink text-sm  " />
      <p className="text-pink flex pl-2 text-sm font-bold">Back</p>
    </button>
  );
};

export default BackBtn;