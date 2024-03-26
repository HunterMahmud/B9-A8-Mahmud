import React from 'react';
import { getDataFromLocalStorage } from './../utils/LocalStorage';
import Listed from './Listed';

const ReadBooks = () => {
    const localData  = getDataFromLocalStorage('read');
    console.log(localData);
    return (
        <div className='flex my-10 flex-col gap-4'>
            {
                localData.map((book)=> <Listed key={book.bookId} book={book}/>)
            }
        </div>
    );
};

export default ReadBooks;