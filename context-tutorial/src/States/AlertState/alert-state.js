import React, { createContext, useReducer } from "react";
import AlertReducer from "../../Reducers/AlertReducer/alert-reducer";

const initialState = {
    alerts: [
        {
            id:1,
            name:'alert1'
        },
        {
            id:2,
            name:'alert2'
        },
        {
            id:3,
            name:'alert3'
        }
    ],
    addAlert: alert => {},
    removeAlert: alertId => {}
};

export const AlertState = createContext(initialState);

export const AlertProvider = ({ children }) => {

    const [state, dispatch] = useReducer(AlertReducer, initialState);

    function addAlert(alert) {
        dispatch({
            type: "ADD_ALERT",
            payload: alert
        });
    }

    function removeAlert(alertId) {
        dispatch({
            type: "REMOVE_ALERT",
            payload: alertId
        });
    }

    return (
        <AlertState.Provider
            value={{
                alerts: state.alerts,
                removeAlert: removeAlert,
                addAlert: addAlert
            }}>
            {children}
        </AlertState.Provider>
    );
};

export default AlertProvider