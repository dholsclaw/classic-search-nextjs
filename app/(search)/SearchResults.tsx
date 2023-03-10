'use client'
import {User} from "../../typings";
import SearchResult from "./SearchResult";

interface SearhResultsProps {
    results: User[]
}

function SearchResults({results}: SearhResultsProps) {
    return (
        <div className="w-full bg-white flex flex-col shadow rounded mt-4 max-h-48 overflow-scroll">
            {results.map((result: User) => <SearchResult key={result.id} result={result}/>)}
        </div>
    );
}

export default SearchResults;
