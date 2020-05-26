import React from "react";
import useGlobalHook from "../customHooks/useGlobalHook";
import * as actions from "../Actions/globalActions";

const initialState = {
    counter: 0
};

const reducer = function(action){
        switch (action.type) {
            case "INC":
                this.setState({ counter: actions.incrementCounter(this.state, action.payload)} );
                break;
            case "DEC":
                this.setState({ counter: actions.decrementCounter(this.state, action.payload)} );
                break;
            default:
                this.setState({ counter: this.state.counter } );
        }
    }

const useGlobalCounter = useGlobalHook(React, initialState, reducer);

export default useGlobalCounter;
