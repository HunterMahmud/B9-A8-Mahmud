import React from 'react';
import Books from '../components/Books';
import Banner from './../components/Banner';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const booksData = useLoaderData() || [];
    return (
        <div className='mt-5'>
            <Banner />
            <Books booksData = {booksData} path="bookdetails"/>
        </div>
    );
};

export default Home;