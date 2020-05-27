import React, { useEffect } from 'react';
import './quotes-table.style.scss.css';
import AlertObservable from '../../Store/observable';
import { useObserver } from 'mobx-react';

const QuotesTable = () => {

  const alert = AlertObservable;

    useEffect(() => {
        console.log(alert);
    }, []);

    return  useObserver(() => (
        <div className="left-side box">
            <h1>Quotes Table</h1>
            <h3>{alert.title}</h3>
            <h3>{alert.privateId}</h3>
        </div>

    ))
};

export  default QuotesTable