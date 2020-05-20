import React, { useContext, useEffect } from "react";
import "./left-side.style.scss";
import AlertsPanel from '../AlertsPanel/alerts-panel.component';
import { AlertState } from "../../States/AlertState/alert-state";

const LeftSide = () => {

    const { addAlert, removeAlert } = useContext(AlertState);

    useEffect(() => {
        console.log("----Left Side initialize-----");
    }, []);

    return (
        <div className="left-side box">
            <h1>Left Side</h1>
            <AlertsPanel/>
        </div>

    );
};

export  default LeftSide