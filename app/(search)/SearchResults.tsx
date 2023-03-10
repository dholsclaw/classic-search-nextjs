'use client'

import SearchResult from "./SearchResult";

function SearchResults({results}) {
    return (
        <div className="w-full bg-white flex flex-col shadow rounded mt-4 max-h-48 overflow-scroll">
            {results.map(result => <SearchResult result={result}/>)}
        </div>
    );
}

export default SearchResults;
