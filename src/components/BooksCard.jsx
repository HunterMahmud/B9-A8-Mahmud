import React from "react";
import { Link } from "react-router-dom";


const  BooksCard = ({ book, path }) => {
  
  const { bookId, bookName, author, image, rating, tags,category } = book;
  return (
    <Link to={`/${path}/${bookId}`} className={`card ${book?.ageRange?"bg-pink-200":"bg-base-100"} border w-[90%] sm:max-w-[400px] mx-auto border-gray-300`}>
      <figure className="px-10 pt-10">
        <img src={image} alt="Shoes" className="rounded-xl max-h-[350px] w-[370px]" />
      </figure>
      <div className="card-body items-start">
        <div className="flex gap-3">
            {
                tags.map((tag,i)=> <p className={`${book?.ageRange?"text-pink-700 bg-pink-400":"text-[#23BE0A] bg-[#23BE0A0D]"} font-medium  py-2 px-3 rounded-[30px]`} key={i}>{tag}</p>)
            }
        </div>
        <h2 className="card-title text-2xl font-bold text-[#131313]">{bookName}</h2>
        <p className="font-medium text-[#131313CC]">By: {author}</p>
        <div className="divider border-t-2 h-0 border-dashed border-gray-400"></div>
        <div className="flex w-full justify-between text-[#131313CC] font-medium">
          <p>{category}</p>
          <div className="flex gap-3 items-center">
            <p>{rating}</p>
            <img className="w-5 h-5" src="/icon-star.png" alt="" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BooksCard;
