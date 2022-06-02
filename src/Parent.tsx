import Button from "@mui/material/Button";
import { useState } from "react";

const POPUP_NAME = "myAwesomePopup";
const WINDOW_PARAMS = "left=100,top=10,width=400,height=600";

function Parent() {

    const [popupHandler, setPopupHandler] = useState<Window | null>();

    return (
        <div>
            <Button
                onClick={() => {
                    const popup = window.open(
                        'https://popup-test.onrender.com/?type=child',
                        POPUP_NAME,
                        WINDOW_PARAMS)
                    setPopupHandler(popup);
                }}
                variant="contained">
                Open Popup
            </Button>
        </div>
    )
}

export default Parent;