const CounterReducer = (state = 0, action) => {
    if(action.type === "RESET")
        return state - state;
    if(action.type === "ADD1")
        return state = state + 1;
    if(action.type === "ADD10")
        return state + 10;
    if(action.type === "REMOVE1")
        return state - 1;
    if(action.type === "REMOVE10")
        return state - 10;
    return state;
}

export default CounterReducer;