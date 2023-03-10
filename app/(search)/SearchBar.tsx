'use client';

import {FaSearch} from "react-icons/fa";

interface SearchBarProps {
    setQuery(arg: string): void
}

export default function SearchBar({setQuery} :SearchBarProps) {

    const handleChange = async (value: string) => {
        setQuery(value);
    }

    return (
        <div className="bg-white w-full rounded h-10 pr-1 shadow flex justify-center">
            <FaSearch className="text-blue-800 inline mt-3 mr-1"/>
            <input
                className="bg-transparent border-0 h-full text-xl focus:outline-none"
                placeholder="Type to search..."
                onChange={(e) => handleChange(e.target.value)}
            />
        </div>
    );
}