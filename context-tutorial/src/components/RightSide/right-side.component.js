import React, { useContext, useEffect } from "react";
import "./right-side.style.scss";
import Alert from '../../components/Alert/alert.component';
//import { GlobalState } from "../../state/GlobalState";

const RightSide = () => {

    useEffect(() => {
        console.log("----Right Side initialize-----");
    }, []);

    return (
        <div className="left-side box">
            <h1>Right Side</h1>
            <Alert/>
        </div>

    );
};

export  default RightSide;