import React, { useContext, useEffect } from "react";
import "./alerts-panel.style.scss";
import { AlertState } from "../../States/AlertState/alert-state";

const AlertsPanel = () => {

    const { alerts, removeAlert} = useContext(AlertState);

    useEffect(() => {
        console.log("----AlertsPanel initialize-----");
    }, []);

    return (
        <div className="alert">
            <h2>Alerts Panel</h2>
            {alerts.map(alert => (
                <div key={alert.id}>
                    {alert.name}
                    <button onClick={()=> removeAlert(alert.id)}>remove</button>
                </div>
            ))}
        </div>

    );
};

export  default AlertsPanel