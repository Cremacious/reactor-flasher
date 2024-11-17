import { fetchData } from "../../utils/api";

function Home () {

    const handleClick = () => {
        fetchData();
    }
    return (

        <div>
            <h1>Home</h1>
            <button onClick={handleClick}>Fetch Data</button>

        </div>
    );
}

export default Home;