import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { MainContext } from "../context/Provider";
import Header from "../components/Header";

const Schedules = () => {
  const { token, userId } = useContext(MainContext);
  //access token and user id with useContext for API requests.

  const [schedules, setSchedules] = useState([]);
  //showing the schedules with useState for creating an array state variable.

  const handleGetUser = async () => {
    //function for getting the user schedule.
    try {
      // api call
      const { data } = await axios.get(`/api/v1/users/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setSchedules(data.classes);
    } catch (err) {}
  };

  //After the first rendering, 
  //if the user is logged in, we give the schedule to the user.
  useEffect(() => {
    if (token && token.length > 0) {
      handleGetUser();
    }
  }, []);

  return (
    <div>
      <Header />
      <h1 className="text-lg pt-10 pl-10 font-bold pb-8">My Schedule</h1>
      <section className="h-[550px] overflow-y-scroll pl-2 pt-6">

      {/* mapping over schedules array(state) and
       displaying the classDay, classTime and className. */}
      {schedules.map((item) => (
        <div
          key={item.id}
          className="border-b-2 m-4 border-gray-400 border-dashed"
        >

          <div className="flex justify-between">
            <p className="pl-10 pt-8 text-sm">{item.classDay}</p>
            <p className="pr-10 pt-8 text-sm">{item.classTime}</p>
          </div>

          <p className="pl-10 pt-4 text-md pb-2 font-bold">{item.className}</p>
        </div>
      ))}
      </section>
    </div>
  );
};

export default Schedules;
