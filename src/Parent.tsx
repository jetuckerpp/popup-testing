import Button from "@mui/material/Button";
import { useState } from "react";
import './Parent.scss';


const POPUP_NAME = "myAwesomePopup";
const WINDOW_PARAMS = "left=100,top=10,width=400,height=600";

function Parent() {

    const [popupHandler, setPopupHandler] = useState<Window | null>(null);

    const openPopup = () => {
        const popup = window.open(
            'https://popup-test.onrender.com/?type=child',
            //'?type=child',
            POPUP_NAME,
            WINDOW_PARAMS);
        setPopupHandler(popup);
    }

    const closePopup = () => {
        popupHandler?.window?.close();
    }

    const popupCheck = () => {

        console.log("doing popupCheck", popupHandler);

        if (!popupHandler || !popupHandler.window) {
            console.log("Popup was closed!")

            setPopupHandler(null);
        }
        else {
            setTimeout(popupCheck, 500);
        }
    }

    if (popupHandler && popupHandler.window) {
        console.log("Starting to check popup");
        popupCheck();
    }

    return (
        <div className="Parent">
            {popupHandler?.window && (
                <div className="overlay">
                    <div className="content">
                        <div className="container">
                            <div>
                                Popup window is Open
                            </div>
                            <div>
                                <Button 
                                    onClick={openPopup}
                                    variant="contained"
                                    color="success">
                                    Go to the popup
                                </Button>
                            </div>
                            <div>
                                <Button 
                                    onClick={closePopup}
                                    variant="contained"
                                    color="error">
                                    Close the popup
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <Button
                onClick={openPopup}
                variant="contained">
                Open Popup
            </Button>
        </div>
    )
}

export default Parent;