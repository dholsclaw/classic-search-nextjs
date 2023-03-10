import SearchComponent from "./(search)/SearchComponent";

const Home = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();

    return (
        <div className="box-border m-0 p-0">
            <div className="pt-36 w-1/3 m-auto flex flex-col items-center min-w-[200px]">
                <SearchComponent users={users}/>
            </div>
        </div>
    );
}

export default Home
