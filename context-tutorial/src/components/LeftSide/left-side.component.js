import React, { useContext, useEffect } from "react";
import "./left-side.style.scss";
import Alert from '../../components/Alert/alert.component';
//import { GlobalState } from "../../state/GlobalState";

const LeftSide = () => {

    useEffect(() => {
        console.log("----Left Side initialize-----");
    }, []);

    return (
        <div className="left-side box">
            <h1>Left Side</h1>
            <Alert/>
        </div>

    );
};

export  default LeftSide