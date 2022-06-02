import Button from "@mui/material/Button";
import { useLocation } from "react-router-dom";


function Child() {

    const { search } = useLocation();

    const params = new URLSearchParams(search);
    
    const redirectAndClose = () => {
        window.location.href = "https://popup-test.herokuapp.com/?type=child&refer=true"
    }

    if (params.get('refer') == 'true') {
        window.close();
    }

    return (
        <div>
            <h1>Child</h1>
            {params.get('refer') == 'true' ? (
                <div>
                    closing page...
                </div>
            ) : (
                <Button
                    onClick={redirectAndClose}
                    variant="contained">
                    Redirect and Close
                </Button>
            )}
        </div>
    )
}

export default Child;