import React, { useEffect } from "react";
import "./left-side.style.scss";
import useGlobalState from '../../Store/index';

const LeftSide = () => {

    const [globalState, globalDispatch] = useGlobalState();

    useEffect(() => {
        console.log("----Left Side on init-----");
    }, []);

    useEffect(() => {
        console.log("----Left Side on globalState change-----");
    }, [globalState]);

    return (
        <div className="left-side box">
            <h1>Left Side</h1>
            <div>
                <h1>global Counter</h1>
                <p>{globalState.counter}</p>
                <button type="button" onClick={() => globalDispatch({
                    type:'INC',
                    payload:1
                })}>
                    +1 to global
                </button>
                <button type="button" onClick={() => globalDispatch({
                    type:'DEC',
                    payload:1
                })}>
                   -1 to global
                </button>
            </div>
        </div>

    );
};

export  default LeftSide