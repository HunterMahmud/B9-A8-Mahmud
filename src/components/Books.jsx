import React, { useState } from 'react';
import { useEffect } from 'react';
import BooksCard from './BooksCard';

const Books = () => {
    const [booksData, setBooksData] = useState([]);
    useEffect(()=>{
        fetch('/books.json')
        .then(res => res.json())
        .then(data => setBooksData(data));
    },[]) 
    return (
        <div className='my-24'>
            <h2 className='text-[#131313] text-[40px] text-center font-bold'>Books</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mt-10'>
            {
                booksData.map(book=> <BooksCard key={book.bookId} book={book} />)
            }
        </div>
        </div>
    );
};

export default Books;