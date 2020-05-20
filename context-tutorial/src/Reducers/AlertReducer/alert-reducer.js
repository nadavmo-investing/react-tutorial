const AlertReducer = (state, action) => {
    switch (action.type) {
        case "ADD_ALERT":
            return {
                ...state,
                alerts: addAlertToState(state.alerts, action.payload)
            };
        case "REMOVE_ALERT":
            return {
                ...state,
                alerts: removeAlertFromState(state.alerts, action.payload)
            };

        default:
            return state;
    }
};

 function addAlertToState(alerts, newAlert){
     if(alerts.find(alert => alert.id === newAlert.id) == null){
         alerts.push(newAlert);
     }
     return alerts;
 }

function removeAlertFromState(alerts, alertId){
     let indexToRemove = alerts.findIndex(alert => alert.id === alertId);
     if (indexToRemove != -1) {
         alerts.splice(indexToRemove,1);
     }
    return alerts;
}

export default AlertReducer