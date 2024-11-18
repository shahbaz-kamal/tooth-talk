import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Banner = () => {
  const { name } = useContext(AuthContext);
  console.log(name);

  return (
    <div className="hero rounded-lg">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="w-full h-[400px] lg:h-[400px] lg:w-[80%] ">
          <img
            src="https://i.ibb.co/jrS1Rm8/dentist-hero.jpg"
            className=" rounded-lg shadow-2xl h-full w-full object-cover"
          />
        </div>
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Your Smile, Our Priority</h1>
          <p className="py-6">
            Tooth Talk offers a comprehensive range of dental services,
            including routine check-ups, cleanings, fillings, extractions, and
            cosmetic dentistry. Our experienced dentists are committed to
            providing personalized care and helping you achieve a healthy,
            beautiful smile.
          </p>
          <button className="bg-color-primary text-color-black rounded-md py-3 px-4 hover:bg-color-tertiary transition duration-300">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
