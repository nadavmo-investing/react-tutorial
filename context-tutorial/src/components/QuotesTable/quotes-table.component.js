import React, { useState, useContext, useEffect } from "react";
import "./quotes-table.style.scss.css";
import AlertsPanel from '../AlertsPanel/alerts-panel.component';
import { AlertState } from "../../States/AlertState/alert-state";

const QuotesTable = () => {

    const { addAlert } = useContext(AlertState);

    useEffect(() => {
        console.log("----Quotes Table initialize-----");
    }, []);

    const addRandomAlert = () => {
        let randomId = Math.floor(Math.random() * 100) + 4;
        addAlert({
            id: randomId,
            name: 'random' + randomId
        });
    }

    return (
        <div className="left-side box">
            <h1>Quotes Table</h1>
            <AlertsPanel/>

            <button onClick={addRandomAlert}>Add Random Alert</button>
        </div>

    );
};

export  default QuotesTable