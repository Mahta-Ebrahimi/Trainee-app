import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";
import Class from "../components/Class";
import Header from "../components/Header";
import { MainContext } from "../context/Provider";


const responsive = {
  desktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 3,
    slidesToSlide: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2.5,
    slidesToSlide: 2.5
  },
};
const Home = () => {
  const { classes } = useContext(MainContext);
  var randomClass=classes[Math.floor(Math.random() * classes.length)];


  return (
    <div>
      <h2 className="flex justify-center text-md pt-4 font-bold ">Popular Classes</h2>
      <Header />
      <section>
      {classes && (
        <Link to={`/class/${randomClass.id}`}>
          <div className="relative w-[340px] h-[400px] mx-auto">
        <img
          src={randomClass?.asset.url}
          className="rounded-lg h-full w-full " alt=""/>
        <h3 className="pl-6 absolute bottom-4 pb-4 text-white font-bold text-4xl">{randomClass.className}</h3>
        </div>
        </Link>
      )}
      </section>
    
      <h2 className="text-md pl-6 pb-12 font-bold">Classes For You</h2>
      <div className=" justify-center pl-6 pr-0 rounded-lg ">
      <Carousel responsive={responsive} >
        {classes.map((item) => (
          <Class
            key={item.id}
            id={item.id}
            url={item.asset.url}
            className={item.className}
            rate={item.rate}
          />
        ))}
      </Carousel>
      </div>
    </div>
  );
};

export default Home;
