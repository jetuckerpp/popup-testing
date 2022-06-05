import { useLocation } from "react-router-dom";
import Parent from "./Parent";
import Child from "./Child";
import './Home.scss';



function Home() {

    const { search } = useLocation();

    const params = new URLSearchParams(search);

    return (
        <div className="Home">
            {params.get('type') === 'child' ? (
                <Child />
            ) : (
                <>
                    <h1>Click the Button</h1>
                    <Parent />
                </>
            )}
        </div>
    )
}

export default Home;