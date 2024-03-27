import React from 'react';
import BooksCard from './BooksCard';

const Books = ({booksData, path}) => {
     
    return (
        <div className='my-24'>
            <h2 className={`${path=='kidszone'?"text-pink-300":"text-[#131313]"} text-[40px] text-center font-bold`}>{path=="kidszone"?'Kids Books':"Books"}</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mt-10'>
            {
                booksData.map(book=> <BooksCard key={book.bookId} path={path} book={book} />)
            }
        </div>
        </div>
    );
};

export default Books;