import React, { useContext, useEffect } from "react";
import "./right-side.style.scss";
import AlertsPanel from '../AlertsPanel/alerts-panel.component';
import { AlertState } from "../../States/AlertState/alert-state";

const RightSide = () => {

    const { addAlert, removeAlert } = useContext(AlertState);

    useEffect(() => {
        console.log("----Right Side initialize-----");
    }, []);

    return (
        <div className="left-side box">
            <h1>Right Side</h1>
            <AlertsPanel/>
        </div>

    );
};

export  default RightSide;