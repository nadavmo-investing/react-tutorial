import React from "react";
import useGlobalHook from "../customHooks/useGlobalHook";
import * as actions from "../Actions/globalActions";

const initialState = {
    counter: 0
};

const reducer = function(state,action){
        switch (action.type) {
            case "INC":
                return { counter: actions.incrementCounter(state, action.payload)} ;
            case "DEC":
               return { counter: actions.decrementCounter(state, action.payload)} ;
            default:
                return { counter: state.counter } ;
        }
    }

const useGlobalCounter = useGlobalHook(React, initialState, reducer);

export default useGlobalCounter;
