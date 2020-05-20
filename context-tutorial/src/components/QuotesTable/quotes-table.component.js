import React, { useContext, useEffect } from "react";
import "./quotes-table.style.scss.css";
import Alert from '../../components/Alert/alert.component';
//import { GlobalState } from "../../state/GlobalState";

const QuotesTable = () => {

    useEffect(() => {
        console.log("----Quotes Table initialize-----");
    }, []);

    return (
        <div className="left-side box">
            <h1>Quotes Table</h1>
            <Alert/>
        </div>

    );
};

export  default QuotesTable