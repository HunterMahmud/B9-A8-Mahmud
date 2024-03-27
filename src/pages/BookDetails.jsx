import React from "react";
import toast from "react-hot-toast";
import { useLoaderData, useParams } from "react-router-dom";
import BookDetailsTable from "../components/BookDetailsTable";
import { saveToLocalStorage } from "../utils/LocalStorage";
import { getDataFromLocalStorage } from "./../utils/LocalStorage";
import { FaChildren } from "react-icons/fa6";

const BookDetails = () => {
  const bookData = useLoaderData();
  const { id } = useParams();
  const bookInfo = bookData.find((book) => book.bookId == id);
  const {
    image,
    bookName,
    review,
    author,
    category,
    tags,
    totalPages,
    rating,
    publisher,
    yearOfPublishing,
  } = bookInfo;
  console.log(bookInfo);
  const handleReadList = (id) => {
    const readBookInfo = bookData.find((book) => book.bookId == id);
    saveToLocalStorage("read", readBookInfo, "Read");
  };
  const handleWishList = (id) => {
    const readList = getDataFromLocalStorage("read");
    const isEsistsInReadList = readList.find((b) => b.bookId == id);
    if (isEsistsInReadList) {
      toast.error("Already in Read List");
    } else {
      const readBookInfo = bookData.find((book) => book.bookId == id);
      saveToLocalStorage("wishlist", readBookInfo, "Wish");
    }
  };
  return (
    <div className=" max-w-6xl my-16 mx-auto bg-white">
      <div className="flex relative items-center justify-center gap-5 flex-col  lg:flex-row">
        <img
          src={image}
          className="max-w-[500px]  h-[740px] rounded-2xl p-20 py-[110px] bg-[#1313130D]"
        />
        

        <div className="">
          <h1 className="text-3xl md:text-4xl font-bold text-[#131313]">
            {bookName}
          </h1>
          <p className="font-medium text-xl mt-4 text-[#131313CC]">
            Author : {author}
          </p>
          <div className="divider h-0"></div>
          <p className="font-medium text-xl text-[#131313CC]">{category} </p>
          <div className="divider h-0"></div>
          {bookInfo?.ageRange && (
            <>
              <div className="flex gap-4 items-center text-xl">
                <FaChildren className="text-2xl bg-gray-700 rounded-full text-pink-500 w-10 h-10 p-2" />
                <p className="font-medium text-xl text-[#131313CC]">
                  Kids Book for [{bookInfo.ageRange}] years
                </p>
              </div>
              <div className="divider h-0"></div>
            </>
          )}
          <p className="py-6 text-[#131313B3]">
            <span className="font-bold text-[#131313]">Review:</span> {review}
          </p>
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
          </div>
          <div className="divider h-0"></div>
          <div>
            <div className="overflow-x-auto">
              <table className="table">
                <tbody>
                  <BookDetailsTable
                    name={"Number of Pages:"}
                    value={totalPages}
                  />
                  <BookDetailsTable name={"Publisher:"} value={publisher} />
                  <BookDetailsTable
                    name={"Year of Publishing:"}
                    value={yearOfPublishing}
                  />
                  <BookDetailsTable name={"Rating: "} value={rating} />

                  {bookInfo?.illustrator && (
                    <BookDetailsTable
                      name={"Illustrator: "}
                      value={bookInfo.illustrator}
                    />
                  )}
                </tbody>
              </table>
            </div>
          </div>
          <div className="flex gap-2 mt-3">
            <button
              onClick={() => handleReadList(id)}
              className="border border-[#1313134D] rounded-lg text-[#131313] font-semibold text-xl px-7 py-3"
            >
              Read
            </button>
            <button
              onClick={() => handleWishList(id)}
              className="bg-[#50B1C9] font-semibold text-xl px-6 py-3 rounded-lg"
            >
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
