import React from 'react'
import { FiSearch } from "react-icons/fi"
import { useState } from 'react';

const Searchbar = ({ onSearch }) => {
    // const [searchTerm, setSearchTerm] = useState('');

    // const handleInputChange = (e) => {
    //     setSearchTerm(e.target.value);
    // };

    // const handleFormSubmit = (e) => {
    //     e.preventDefault();
    //     onSearch(searchTerm);
    // };
    return (
        <div className="relative">
            {/* <form onSubmit={handleFormSubmit}> */}
            <form>
                <div className="flex items-center rounded-full bg-white border border-gray-300 ">
                    <input
                        type="search"
                        name="search"
                        placeholder="Search"
                        // value={searchTerm}
                        // onChange={handleInputChange}
                        className="rounded-l-full h-10  pr-10 py-2 px-4 focus:outline-none"
                    />
                    <button
                        type="submit"
                        className="absolute right-0 top-0 mt-2 mr-2 inline-flex items-center"
                    >
                        <FiSearch className="text-gray-600 relative top-1 right-3" />
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Searchbar