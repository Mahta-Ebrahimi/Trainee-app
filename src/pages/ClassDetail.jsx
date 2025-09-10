import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router";
import { MainContext } from "../context/Provider";
import { BsFillCaretLeftFill } from "react-icons/bs";
import Trainer from "../components/Trainer";
import Rating from "react-rating";

const ClassDetail = () => {
  const [detail, setDetail] = useState();
  const [trainerImageUrl, setTrainerImageUrl] = useState();
  const [userIsMember, setUserIsMember] = useState(false);
  const [classRate, setClassRate] = useState(0);
  const [errorRate, setErrorRate] = useState();

  const { userId, token } = useContext(MainContext);

  const { id } = useParams();

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  const handleGetDetail = async (id) => {
    try {
      const { data } = await axios.get(`/api/v1/classes/${id}`);
      const { data: asset } = await axios.get(
        `/api/v1/assets/${data.trainer.assetId}`
      );
      setUserIsMember(data.users.find((item) => item.id == Number(userId)));
      setTrainerImageUrl(asset.url);
      setDetail(data);
    } catch (err) {}
  };

  useEffect(() => {
    handleGetDetail(id);
    getRating();
  }, []);

  const handleLeave = async () => {
    try {
      await axios.delete(`/api/v1/users/${userId}/classes/${detail.id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUserIsMember(false);
    } catch (err) {}
  };

  const handleSignUp = async () => {
    try {
      await axios.post(
        `/api/v1/users/${userId}/classes/${detail.id}`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setUserIsMember(true);
    } catch (err) {}
  };

  const handleRate = async (rate) => {
    try {
      const { data } = await axios.get(`/api/v1/classes/${id}/ratings`);
      const userRate = data.find((item) => item.userId == userId);
      if (userRate) {
        setErrorRate("The user already has rated.");
        return;
      }

      const body = new URLSearchParams();
      body.append("userId", userId);
      body.append("rating", rate);

      await axios.post(`/api/v1/classes/${id}/ratings`, body, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Bearer ${token}`,
        },
      });
      getRating();
    } catch (err) {}
  };

  const getRating = async () => {
    try {
      const { data } = await axios.get(`/api/v1/classes/${id}/ratings`);
      const ratings = data.map((item) => item.rating);
      let sum = 0;

      for (let rate of ratings) {
        sum += rate;
      }

      setClassRate(sum / ratings.length);
    } catch (err) {}
  };

  return (
    <>
      {detail && (
        <>
          <section className="relative">
            <button className="absolute flex ml-12" onClick={goBack}>
              <BsFillCaretLeftFill className=" text-pink text-sm mt-14" />
              <p className="text-pink pl-2 text-sm mt-12 font-bold">Back</p>
            </button>
            <img src={detail.asset.url} alt="" className="h-[480px]" />
            <section className="absolute bottom-8 left-1 p-2">
              <h2 className="text-white text-lg font-bold">{detail.className}</h2>
              <div className="pb-12"><progress max={5} value={classRate}/></div>
            </section>
            <section className="pl-4"><Rating onChange={handleRate} /></section>
            {errorRate && <p className="text-red-400 pl-6">{errorRate}</p>}
            {userId && (
              <button
                className="absolute right-0 bottom-16 bg-white w-32 h-16 rounded-l-lg"
                onClick={() => (userIsMember ? handleLeave() : handleSignUp())}
              >
                <p className="text-md">{userIsMember ? "Leave" : "SignUp"}</p>
              </button>
            )}
          </section>
          <h2 className="text-md pl-6  font-bold">Schedule</h2>
          <div className="flex justify-between pb-6">
            <p className=" pl-6">{detail.classDay}</p>
            <p className="pr-6">{detail.classTime}</p>
          </div>
          <p className="pl-6">{detail.classDescription}</p>
          <h2 className="pl-6 text-md font-bold">Trainer</h2>
          <Trainer
            trainerImageUrl={trainerImageUrl}
            trainerName={detail.trainer.trainerName}
          />
        </>
      )}
    </>
  );
};

export default ClassDetail;
