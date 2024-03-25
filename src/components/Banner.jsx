import React from "react";

const Banner = () => {
  return (
    <div className="hero rounded-3xl pt-12 min-h-screen  max-w-6xl bg-base-200 mx-auto">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://i.ibb.co/L0jw4hK/1-the-martin.jpg"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div className="">
          <h1 className="text-[#131313] font-bold text-[56px]">Books to freshen <br /> up your bookshelf</h1>
          
          <button className="btn mt-7 btn-primary">View The List</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
