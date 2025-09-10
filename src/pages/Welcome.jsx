import { useNavigate } from "react-router";
import welcome1 from "../Assets/welcome1.jpg";
import welcome2 from "../Assets/welcome2.jpg";

const Welcome = () => {
  const navigate = useNavigate();
  return (
    <section  className="relative w-full h-screen flex flex-col items-center justify-between overflow-hidden">
      
      <img src={welcome1} alt=""  className="w-full h-1/2 object-cover"/>
      <div className="absolute right-1/3 bottom-80">
      <p className="text-white text-xl pl-10">Believe Yourself</p>
      <div className="flex">
      <hr className="w-1/6 items-center pb-40"></hr>
      <p className="text-white text-sm pl-3">Train like a pro</p>
      </div>
      </div>
      <button className="absolute w-64 h-16 bottom-28 right-0 bg-white rounded-tl-lg rounded-bl-lg text-md" onClick={() => navigate("/home")}>Start Training</button>

      <img src={welcome2} alt="" className="w-full h-1/2 object-cover" />
    </section>
  );
};

export default Welcome;
