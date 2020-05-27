import React, { useContext, useEffect } from "react";
import "./right-side.style.scss";
import AlertsPanel from '../AlertsPanel/alerts-panel.component';

import useGlobalState from '../../Store/index';

const RightSide = () => {

    const [globalState, globalDispatch] = useGlobalState();

    useEffect(() => {
        console.log("----Right Side initialize-----");
    }, []);

    return (
        <div className="left-side box">
            <h1>Right Side</h1>
            <div>
                <h1>global Counter</h1>
                <p>{globalState.counter}</p>
                <button type="button" onClick={() => globalDispatch(globalState,{
                    type:'INC',
                    payload:1
                })}>
                    +1 to global
                </button>
                <button type="button" onClick={() => globalDispatch(globalState,{
                    type:'DEC',
                    payload:1
                })}>
                    -1 to global
                </button>
            </div>
        </div>

    );
};

export  default RightSide;