import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const MainContext = createContext();

const Provider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [userId, setUserId] = useState(localStorage.getItem("userId"));
  const [classes, setClasses] = useState([]);

  const handleGetClasses = async () => {
    try {
      const { data } = await axios.get("/api/v1/classes");
      for (let item of data) {
        item.rate = await getRating(item.id);
      }
      setClasses(data);
    } catch (err) {}
  };

  const getRating = async (id) => {
    try {
      const { data } = await axios.get(`/api/v1/classes/${id}/ratings`);
      const ratings = data.map((item) => item.rating);
      let sum = 0;

      for (let rate of ratings) {
        sum += rate;
      }

      return sum / ratings.length;
    } catch (err) {}
  };

  useEffect(() => {
    handleGetClasses();
  }, []);

  return (
    <MainContext.Provider
      value={{ token, setToken, userId, setUserId, classes }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default Provider;
