export const incrementCounter = (oldState, amount) => {
    return oldState.counter + amount;
};

export const decrementCounter = (oldState, amount) => {
    return oldState.counter - amount;
};