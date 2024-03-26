import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="hero rounded-3xl py-7 min-h-[550px]  max-w-6xl bg-base-200 mx-auto">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://i.ibb.co/L0jw4hK/1-the-martin.jpg"
          className="max-w-[320px] rounded-lg shadow-2xl"
        />
        <div className="">
          <h1 className="text-[#131313] font-bold text-[56px]">Books to freshen <br /> up your bookshelf</h1>
          
          <Link to='/listedbooks' className="btn mt-7 bg-[#23BE0A] font-bold text-xl text-white p-7  content-center">View The List</Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
