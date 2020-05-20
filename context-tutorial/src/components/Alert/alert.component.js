import React, { useContext, useEffect } from "react";
import "./alert.style.scss";
//import { GlobalState } from "../../state/GlobalState";

const Alert = () => {

    useEffect(() => {
        console.log("----Alert initialize-----");
    }, []);

    return (
        <div className="alert">
            <h2>Alert</h2>
        </div>

    );
};

export  default Alert