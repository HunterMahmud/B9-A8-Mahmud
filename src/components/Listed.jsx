import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { FaUserFriends } from "react-icons/fa";
import { MdOutlineContactPage } from "react-icons/md";
import { Link } from "react-router-dom";

const Listed = ({ book }) => {
  console.log(book);
  const { bookId, image, bookName, author,  category,tags, yearOfPublishing, rating, publisher, totalPages } = book;
  return (
    <div className="w-full mx-auto bg-white border p-3 rounded-2xl border-[#13131326]">
      <div className="flex flex-col items-center lg:grid lg:grid-cols-12 gap-9">
        <div className="lg:col-span-3 w-[230px] h-[260px]">
          <img
            src={image}
            className=" w-full h-full rounded-2xl p-10 py-[50px] bg-[#1313130D]"
          />
        </div>

        <div className="lg:col-span-9 flex flex-col gap-3">
          <h1 className="text-2xl font-bold text-[#131313]">{bookName}</h1>
          <p className="font-medium mt-4 text-[#131313CC]">Author : {author}</p>
          
            
            <div className="flex items-center gap-3">
              <h3 className="font-bold text-[#131313]">Tag</h3>
              {tags.map((tag, i) => (
                <p
                  className="text-[#23BE0A] font-medium bg-[#23BE0A0D] py-2 px-3 rounded-[30px]"
                  key={i}
                >
                  #{tag}
                </p>
              ))}
              <div className="flex gap-2 items-center text-[#131313CC]">
              <IoLocationOutline />
                <p>Year of Publishing: {yearOfPublishing}</p>
              </div>
            </div>
          
          <div className="flex gap-7  text-[#131313CC]">
            <div className="flex gap-2 items-center">
            <FaUserFriends  />
            <p> Publisher: {publisher}</p>
            </div>
            <div className="flex gap-2 items-center">
                <MdOutlineContactPage />
                <p>Page {totalPages}</p>
            </div>
            
          </div>
          <div className="divider h-0"></div>
          <div className="flex gap-3">
            <p className="text-[#328EFF] rounded-[30px] px-3 py-2 bg-[#328EFF26] font-semibold">Category: {category}</p>
            <p className="text-[#FFAC33] rounded-[30px] px-3 py-2 bg-[#FFAC3326] font-semibold">Rating: {rating}</p>
            <Link to={`/bookdetails/${bookId}`} className="text-white rounded-[30px] px-3 py-2 bg-[#23BE0A] font-semibold" >View Details</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listed;
