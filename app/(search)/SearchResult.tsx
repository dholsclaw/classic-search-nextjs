function SearchResult({result}) {
    return (
        <div
            className="pl-2 pr-4 hover:bg-gray-200"
            key={result.id}
            onClick={() => alert(`You clicked on ${result.name}`)}
        >{result.name}</div>
    );
}

export default SearchResult;