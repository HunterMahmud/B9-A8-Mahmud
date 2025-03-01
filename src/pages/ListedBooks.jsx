import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getDataFromLocalStorage } from "./../utils/LocalStorage";
import Listed from './../components/Listed';

const ListedBooks = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const [sortManage,setSortManage] = useState('');
  const [localData, setLocalData] = useState([]);
  useEffect(() => {
    if (currentTab == 0) {
      setLocalData( getDataFromLocalStorage("read"));
    } else if (currentTab == 1) {
      setLocalData( getDataFromLocalStorage("wishlist"));
    }
  }, [currentTab,sortManage]);
  const handleOptionChange = (event)=>{
    let localReadData = getDataFromLocalStorage('read');
    let localWishData = getDataFromLocalStorage('wishlist');
    if(event.target.value=='1'){
     
      localReadData.sort((book1, book2) => book2.rating - book1.rating);
      localWishData.sort((book1, book2) => book2.rating - book1.rating);
      
    }
    else if(event.target.value=='2'){
      
      localReadData.sort((book1,book2) => book2.totalPages-book1.totalPages);
      localWishData.sort((book1,book2) => book2.totalPages-book1.totalPages);
    }
    else if(event.target.value == '3'){
     
      localReadData.sort((book1,book2)=> book2.yearOfPublishing - book1.yearOfPublishing);
      localWishData.sort((book1,book2)=> book2.yearOfPublishing - book1.yearOfPublishing);
    }
    localStorage.setItem('read',JSON.stringify(localReadData));
    localStorage.setItem('wishlist',JSON.stringify(localWishData));
    setSortManage(event.target.value);
  }

  return (
    <div className="flex flex-col justify-center items-center max-w-6xl mx-auto  ">
     <div className="flex justify-center items-center w-full ">
     <h1 className=" text-center w-[95%] lg:w-[97%] p-5 text-[#131313] my-5 text-3xl bg-[#1313130D] font-bold rounded-2xl">
        Books
      </h1>
     </div>

      <div className="flex justify-center mx-auto mt-5 mb-10">
        <select
          className="bg-[#23BE0A] border rounded-lg shadow-sm p-3 text-white font-medium focus:outline-none"
          id="books"
          name="books"
          onChange={handleOptionChange}
          defaultValue=""
          
        >
          <option value="">Sort By</option>
          <option className="bg-gray-100 py-2 text-gray-900 " value="1">
            Rating
          </option>
          <option className="bg-gray-100 py-2 text-gray-900 " value="2">
            Number of Pages
          </option>
          <option className="bg-gray-100 py-2 text-gray-900 " value="3">
            Publishing year
          </option>
        </select>
      </div>

      <div className="flex items-center overflow-x-auto overflow-y-hidden w-[93%] sm:w-full ml-5  sm:justify-start flex-nowrap">
        <Link
          onClick={() => setCurrentTab(0)}
          to=""
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
            currentTab === 0 ? "border border-b-0 rounded-t-lg" : "border-b"
          } `}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
          </svg>
          <span>Read Books</span>
        </Link>
        <Link
          onClick={() => setCurrentTab(1)}
          to=""
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
            currentTab === 1 ? "border border-b-0 rounded-t-lg" : "border-b"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
          </svg>
          <span>Wishlist Books</span>
        </Link>
      </div>

      <div className="flex my-10 flex-col w-full gap-4">
        {localData.map((book) => {
          let path = 'bookdetails';
          if(book?.ageRange) path = 'kidszone';
          return <Listed key={book.bookId} path={path}  book={book} />
        })}
      </div>
    </div>
  );
};

export default ListedBooks;
