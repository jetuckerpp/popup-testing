import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import './Parent.scss';


const POPUP_NAME = "myAwesomePopup";
const WINDOW_PARAMS = "left=100,top=10,width=400,height=600";

interface ParentState {
    popupHandler: Window | null;
    isOpen: boolean;
}

function Parent() {

    //const [popupHandler, setPopupHandler] = useState<Window | null>(null);
    const [parentState, setParentState] = useState<ParentState>({popupHandler: null, isOpen: false});

    const [choice, setChoice] = useState<String>();

    const getChoice = () => {
        console.log("fetching...");
        fetch("/api/choice")
            .then((res) => res.json())
            .then((data) => {
                console.log("got a choice", data.value);
                if (choice != data.value) {
                    setChoice(data.value);
                }
            });
    };

    // useEffect(() => {
    //     getChoice();
    // }, []);

    useEffect(() => {
        getChoice();
    }, [parentState.isOpen]);

    const openPopup = () => {
        const popup = window.open(
            //'https://popup-test.onrender.com/?type=child',
            '?type=child',
            POPUP_NAME,
            WINDOW_PARAMS);

        setParentState({
            isOpen: true,
            popupHandler: popup
        });
    }

    const closePopup = () => {
        //popupHandler?.window?.close();
        setTimeout(() => {
            parentState.popupHandler?.window?.close();

            setParentState({
                isOpen: false,
                popupHandler: null
            });
        }, 500); // specific workaround for for ios
    }

    const popupCheck = () => {

        console.log("doing popupCheck", parentState.popupHandler);

        if (!parentState.popupHandler?.window ||
            parentState.popupHandler?.closed ||
            parentState.popupHandler?.window?.closed) {
            console.log("Popup was closed!")

            setParentState({
                isOpen: false,
                popupHandler: null
            });
        }
        else {
            setTimeout(popupCheck, 500);
        }
    }

    //if (parentState.popupHandler && parentState.popupHandler.window) {
    if (parentState.isOpen) {
        console.log("Starting to check popup");
        popupCheck();

    }



    return (
        <div className="Parent">
            {parentState.isOpen && (
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

            {choice && (
                <div className="choice">
                    Last time you clicked: {choice}
                </div>
            )}
        </div>
    )
}

export default Parent;