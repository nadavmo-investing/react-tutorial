import React, { useEffect } from "react";
import "./quotes-table.style.scss.css";

const QuotesTable = () => {

    useEffect(() => {
        console.log("----Quotes Table initialize-----");
    }, []);

    return (
        <div className="left-side box">
            <h1>Quotes Table</h1>
        </div>

    );
};

export  default QuotesTable