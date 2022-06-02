import { useLocation } from "react-router-dom";
import Parent from "./Parent";
import Child from "./Child";

function Home() {

    const { search } = useLocation();

    const params = new URLSearchParams(search);

    return (
        <div>
            {params.get('type') === 'child' ? (
                <Child />
            ) : (
                <>
                    <h1>Home</h1>
                    <Parent />
                </>
            )}
        </div>
    )
}

export default Home;