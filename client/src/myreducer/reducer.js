const iState = {
    text: '',
    mywishes:[{_id:1,wish:"loading"}]
}

const reducer = (state = iState, action) => {
    if (action.type === 'UPDATE_INPUT') {
        return {
            ...state,
            text:action.payload 
        }
    }
    return state;
}

export default reducer;