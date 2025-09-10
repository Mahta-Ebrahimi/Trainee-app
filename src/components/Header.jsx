import axios from "axios";
import { useContext, useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { BsTriangleFill } from "react-icons/bs";
import { GrClose } from "react-icons/gr";
import { Link,useLocation} from "react-router-dom";
import { MainContext } from "../context/Provider";
import BackBtn from "./BackButton";

const Header = () => {
  const [navigationOpen, setNavigationOpen] = useState(false);
  //useState hook[current state, state updater function]=useState(Boolean false-->navigation by default is closed)
  //can be strings, numbers, booleans, arrays, objects,
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const { setToken, userId, setUserId } = useContext(MainContext);
  //useContext returns the context value for this component. 
  const { pathname } = useLocation();
  //useLocation returns the current location object.
  const [error, setError] = useState();
  
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
    //change username state and password state to form-urlencoded.
    //  --form 'username=user1'
    //  --form 'password=1234'
      const body = new URLSearchParams();
      body.append("username", username);
      body.append("password", password);

    //login call request(React Async is a promise to make API call and fetching data) 
      const { data } = await axios.post("/auth/token", body, {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      });
      localStorage.setItem("token", data.token);
      localStorage.setItem("userId", data.userId);
      //Setting the user ID and password to localStorage to use the next time  when the user opens the app.

      setUserId(data.userId);
      setToken(data.token);
      //Setting the password and user ID to global for use on other pages
      
    } catch (err) {
      setError("username or password is wrong");
      //ErrorResponse 
      //if service call fails, show error the message to user with state error
    }
  };
    //logout Function
  const handleLogout = () => {
    localStorage.clear();
    //Clear method for clearing user data from the local storage
    setToken(undefined);
    setUserId(undefined);
  };

  return (
    <header className="flex justify-between pr-8 pt-6">
      <section className="flex justify-between w-full items-center pb-4">
      {/* <BsTriangleFill className="text-gray" size={30}/> */}
      {pathname !== "/home" && <BackBtn />}
      {/* conditional rendering: showing back button with evaluating the url page*/}
      
      <BiMenuAltRight
        className="text-gray ml-auto mr-0"
        size={45}
        onClick={() => setNavigationOpen(!navigationOpen)}
        // onClick event for opening the navigation page with the state.
      />
      </section>

      {navigationOpen && (
        <div className="fixed h-full w-full flex top-0 p-5 flex-col bg-white z-[2001]">
          <GrClose
            size={25}
            onClick={() => setNavigationOpen(!navigationOpen)}
            className="text-[#E4E4E4] self-end"
          />
          {/* onClick event for closing the navigation*/}

          <section className="flex flex-col mx-auto justify-center text-center mt-20">
          <Link to={"/home"} className="pb-10 text-md">Home</Link>
          <Link to={"/search"} className="pb-10 text-md">Search</Link>
          {userId && <Link to={"/schedule"} className="pb-10 text-md" >My Schedule</Link>}
            {/* conditional rendering: 
            showing the schedule page if the the user is logged in!! 
            
            */}

          {userId && (
            <p onClick={handleLogout} to={"/home"} className="text-md hover:font-bold">
              Log out
            </p>
          )}
            {/*conditional rendering including an element:
             showing the log out button if the the user is logged in!!
             if userId !=null and userId!=undefined ===> show <p></p>
            */}


          {!userId && (
            <form onSubmit={handleLogin} className="flex flex-col mx-auto justify-center">
              <input
                placeholder="username"
                onChange={(e) => setUsername(e.target.value)}
                className="mb-2 p-2 bg-gray rounded-lg border border-zinc-500"
              />
              <input
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
                className="mb-2 p-2 bg-gray rounded-lg border border-zinc-500"
              />
              {error && <p className="text-red-400">{error}</p>}
              {/* conditional rendering: login error whit state */}
              <button type="submit" className="text-md pt-4 hover:font-bold">Login</button>
            </form>
            // conditional rendering:
            // showing the login form if the user is not logged in.
          )}
          </section>
        </div>    
      )}
    </header>
  );
};

export default Header;
