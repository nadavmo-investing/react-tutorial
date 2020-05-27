import React, { useEffect } from "react";
import "./alerts-panel.style.scss";
import AlertObservable from '../../Store/observable';
import { useObserver } from 'mobx-react';

const AlertsPanel = () => {

    const alert = AlertObservable;
    useEffect(() => {
        console.log("----AlertsPanel initialize-----");
    }, []);

    function handleClick() {
        ++alert.privateId;
    }

    return useObserver(() => (
        <div className="alert">
            <h2>Alerts Panel</h2>
            <h3>{alert.title}</h3>
            <h3>{alert.privateId}</h3>
            <button onClick={()=>handleClick()}>change!</button>
        </div>
    ));
};

export  default AlertsPanel