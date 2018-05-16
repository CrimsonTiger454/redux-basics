const initialState = {
greenInput:''
}

//action types
const INPUT_VAL = 'INPUT_VAL';

//reducer
export default function reducer (state = initialState, action) {
switch (action.type) {
    case INPUT_VAL: 
    console.log(state.greenInput);
    return Object.assign({}, state, {
        greenInput: action.payload
    })
    default: return state;
  }
}

//action creators
export function handleInputValue (value) {
    return {
        type: 'INPUT_VAL',
        payload: value
    }
}