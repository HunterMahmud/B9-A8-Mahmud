import React from 'react';
import { getDataFromLocalStorage } from './../utils/LocalStorage';
import Listed from './Listed';

const WishlistBooks = () => {
    const localData  = getDataFromLocalStorage('wishlist');
    return (
        <div className='flex my-10 flex-col gap-4'>
            {
                localData.map((book)=> <Listed key={book.bookId} book={book}/>)
            }
        </div>
    );
};

export default WishlistBooks;