import { useContext, useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import Class from "../components/Class";
import { MainContext } from "../context/Provider";
import Header from "../components/Header";
import axios from "axios";
import Trainer from "../components/Trainer";

const responsive = {
  desktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3,
  },
};

const Search = () => {
  const [search, setSearch] = useState();
  const [searchResult, setSearchResult] = useState([]);
  const [trainers, setTrainers] = useState([]);
  const { classes } = useContext(MainContext);

  const handleGetTrainers = async () => {
    try {
      const { data } = await axios.get("/api/v1/trainers");
      setTrainers(data);
    } catch (err) {}
  };

  useEffect(() => {
    handleGetTrainers();
    if (search && search.length > 1) {
      const filteredData = classes.filter(
        (item) =>
          item.classDescription
            .toLowerCase()
            .includes(search.toLowerCase().trim()) ||
          item.classDay.toLowerCase().includes(search.toLowerCase().trim()) ||
          item.classDescription
            .toLowerCase()
            .includes(search.toLowerCase().trim()) ||
          item.trainer.trainerName
            .toLowerCase()
            .includes(search.toLowerCase().trim())
      );
      setSearchResult(filteredData);
    } else {
      setSearchResult([]);
    }
  }, [search]);

  return (
    <>
      <Header/>
      <h2 className="text-lg pl-10 pb-0 font-bold">Search</h2>
      <input
        placeholder="Search classes"
        onChange={(e) => setSearch(e.target.value)}
        className="flex mb-8 p-2 bg-gray rounded-lg pl-4  w-4/5 mx-auto text-sm border border-neutral-400"
      />
      <h3 className="text-md pl-10 font-bold">Popular Classes</h3>

      <Carousel responsive={responsive} className="pl-8 pr-0">
        {searchResult.map((item) => (
          <Class
            key={item.id}
            id={item.id}
            url={item.asset.url}
            className={item.className}
          />
        ))}
      </Carousel>
      {searchResult.length === 0 && (
        <p className="text-xm font-bold pl-10 pr-10 pb-10 pt-4 text-gray-400 text-red-400">
          Your search did not give any results. Try to search for something
          else.
        </p>
      )}
      <h2 className="text-md pl-10 font-bold ">Popular Trainers</h2>
      <div className="h-[310px] overflow-y-scroll pl-4">
        {trainers.map((item) => (
          <Trainer
            trainerImageUrl={item.asset.url}
            trainerName={item.trainerName}
          />
        ))}
      </div>
    </>
  );
};

export default Search;
