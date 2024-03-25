import React from 'react';
import Books from '../components/Books';
import Banner from './../components/Banner';

const Home = () => {
    return (
        <div className='mt-5'>
            <Banner />
            <Books />
        </div>
    );
};

export default Home;