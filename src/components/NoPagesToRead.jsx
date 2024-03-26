import React from "react";
import { Link } from 'react-router-dom';

const NoPagesToRead = () => {
  return (
    <section className="flex items-center min-h-screen p-16 bg-gray-100 ">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <p className="text-2xl font-semibold md:text-3xl">
            Sorry, we couldn't find any data to show.
          </p>
          <p className="mt-4 mb-8 text-gray-400">
            Add data to Read List to show BarChart.
          </p>
          <Link
            to="/"
            className="px-8 py-3 font-semibold rounded bg-violet-400 text-gray-900"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NoPagesToRead;
