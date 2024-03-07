import React from 'react';
import { useGlobalContext } from '../context';

const Search = () => {
    const { query, setQuery, isError } = useGlobalContext();

    return (
        <div className="flex flex-col items-center justify-center mt-8 mb-4">
            <div className="w-full max-w-xl flex space-x-4 p-2">

                <input
                    type="text"
                    className="block w-full px-4 py-2 text-yellow-700 bg-white border rounded-full focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Search..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button className="px-4 text-white bg-yellow-600 rounded-full ">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                </button>
            </div>
            {isError.show && isError.msg && (
                <div className="text-red-500 mt-2">{isError.msg}</div>
            )}
        </div>
    );
};

export default Search;
