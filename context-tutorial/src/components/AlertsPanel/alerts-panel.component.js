import React, { useEffect } from "react";
import "./alerts-panel.style.scss";

const AlertsPanel = () => {

    useEffect(() => {
        console.log("----AlertsPanel initialize-----");
    }, []);

    return (
        <div className="alert">
            <h2>Alerts Panel</h2>
        </div>

    );
};

export  default AlertsPanel