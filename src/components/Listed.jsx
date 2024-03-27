import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { FaUserFriends } from "react-icons/fa";
import { MdOutlineContactPage } from "react-icons/md";
import { Link } from "react-router-dom";
//w-[90%] md:w-[calc(100%-50px)] lg:w-full flex flex-col items-center justify-center mx-6 lg:mx-auto
const Listed = ({ book,path }) => {
  //console.log(book);
  const {
    bookId,
    image,
    bookName,
    author,
    category,
    tags,
    yearOfPublishing,
    rating,
    publisher,
    totalPages,
  } = book;
  return (
    <div className="mx-5 bg-white border p-3 rounded-2xl border-[#13131326]">
      <div className="flex flex-col items-center justify-center lg:grid lg:grid-cols-12 gap-9">
        <div className="lg:col-span-3  lg:w-[230px] lg:h-[260px]">
          <img
            src={image}
            className={`w-full h-full rounded-2xl p-10 py-[50px] ${book?.ageRange?'bg-pink-300':'bg-[#1313130D]'}`}
          />
        </div>

        <div className="lg:col-span-9 w-full flex flex-col gap-3">
          <h1 className="text-2xl font-bold text-[#131313]">{bookName}</h1>
          <p className="font-medium mt-4 text-[#131313CC]">Author : {author}</p>

          <div className="md:flex items-center gap-3">
            <div className="md:flex md:gap-3">
              <h3 className="font-bold text-center text-[#131313]">Tag</h3>
              {tags.map((tag, i) => (
                <p
                  className="text-[#23BE0A] font-medium bg-[#23BE0A0D] py-2 px-3 rounded-[30px] flex justify-center items-center my-3 md:my-0"
                  key={i}
                >
                  #{tag}
                </p>
              ))}
            </div>
            <div className="flex gap-2 items-center text-[#131313CC]">
              <IoLocationOutline />
              <p>Year of Publishing: {yearOfPublishing}</p>
            </div>
          </div>

          <div className="md:flex  gap-7  text-[#131313CC]">
            <div className="flex gap-2 items-center">
              <FaUserFriends />
              <p> Publisher: {publisher}</p>
            </div>
            <div className="flex gap-2 items-center">
              <MdOutlineContactPage />
              <p>Page {totalPages}</p>
            </div>
          </div>
          <div className="divider h-0"></div>
          <div className="md:flex md:gap-3">
            <p className="text-[#328EFF] rounded-[30px] px-3 py-2 bg-[#328EFF26] font-semibold flex justify-center items-center mb-3 md:mb-0">
              Category: {category}
            </p>
            <p className="text-[#FFAC33] rounded-[30px] px-3 py-2 bg-[#FFAC3326] font-semibold flex justify-center items-center mb-3 md:mb-0">
              Rating: {rating}
            </p>
            <Link
              to={`/${path}/${bookId}`}
              className="text-white rounded-[30px] px-3 py-2 bg-[#23BE0A] font-semibold flex justify-center items-center mb-3 md:mb-0"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listed;
