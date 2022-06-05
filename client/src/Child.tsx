import Button from "@mui/material/Button";
import { useLocation } from "react-router-dom";
import './Child.scss';



function Child() {

    const { search } = useLocation();

    const params = new URLSearchParams(search);
    
    const redirectAndClose = (text: string) => {
        //window.location.href = "https://popup-test.herokuapp.com/?type=child&refer=true"
        window.location.href = `/?type=child&refer=true&choice=${text}`
    }

    if (params.get('refer') == 'true') {
        //window.close();

        setTimeout(window.close, 500); // specific workaround for for ios
    }

    return (
        <div className="Child">
            <h1>Popup</h1>
            {params.get('refer') == 'true' ? (
                <div>
                    closing popup...
                </div>
            ) : (
                <div className="choices">
                    <div>
                        <Button
                            onClick={() => redirectAndClose("A")}
                            variant="contained">
                            Choose A
                        </Button>
                    </div>
                    <div>
                        <Button
                            onClick={() => redirectAndClose("B")}
                            variant="contained">
                            Choose B
                        </Button>
                    </div>
                    <div>
                        <Button
                            onClick={() => redirectAndClose("C")}
                            variant="contained">
                            Choose C
                        </Button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Child;