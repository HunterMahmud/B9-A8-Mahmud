import React from "react";

const  BooksCard = ({ book }) => {
  console.log(book);
  const { bookName, author, image, rating, tags } = book;
  return (
    <div className="card bg-base-100 border max-w-[400px] mx-auto border-gray-300">
      <figure className="px-10 pt-10">
        <img src={image} alt="Shoes" className="rounded-xl max-h-[350px] w-[370px]" />
      </figure>
      <div className="card-body items-start">
        <div className="flex gap-3">
            {
                tags.map((tag,i)=> <p className="text-[#23BE0A] font-medium bg-[#23BE0A0D] py-2 px-3 rounded-[30px]" key={i}>{tag}</p>)
            }
        </div>
        <h2 className="card-title text-2xl font-bold text-[#131313]">{bookName}</h2>
        <p className="font-medium text-[#131313CC]">By: {author}</p>
        <div className="divider border-t-2 h-0 border-dashed border-gray-400"></div>
        <div className="flex w-full justify-between text-[#131313CC] font-medium">
          <p>Fiction</p>
          <div className="flex gap-3 items-center">
            <p>{rating}</p>
            <img className="w-5 h-5" src="/icon-star.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BooksCard;
