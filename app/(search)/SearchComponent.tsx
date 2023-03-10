'use client'
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import {useEffect, useState} from "react";

function SearchComponent({users}) {
    const [query, setQuery] = useState();
    const [filteredUsers, setFilteredUsers] = useState(users);

    useEffect(() => {
        if(!query) {
            return setFilteredUsers([]);
        }
        setFilteredUsers(users.filter((user) => user.name.toLowerCase().includes(query)))
    }, [query, setQuery]);

    return (
        <>
        <SearchBar setQuery={setQuery}/>
        <SearchResults results={filteredUsers}/>
        </>
    )
}

export default SearchComponent;