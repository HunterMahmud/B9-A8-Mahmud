import React from 'react';
import Books from './../components/Books';
import { useLoaderData } from 'react-router-dom';
import KidsBanner from '../components/KidsBanner';

const KidsZone = () => {
    const booksData = useLoaderData();
    return (
        <div className='mt-5'>
            <KidsBanner />
            <Books booksData={booksData} path="kidszone"/>
        </div>
    );
};

export default KidsZone;