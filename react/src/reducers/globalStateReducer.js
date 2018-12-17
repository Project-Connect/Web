/**
* This reducer is used for handling all global states
*/

//specifying initial state of the component
const initialState = {
  current_user: null
}

const globalStateReducer = (state = initialState, action) => {
  // action has 2 attribute, type and payload, type determines what is happening
  // payload is the data used to mutate the state.
  switch (action.type) {
    // By convention via online redux documentation, use ALL_CAPS for cases
    case "SET_USER":
      //checkout ES6 Spread syntax if you're not sure what {...Object} is doing
      return { ...state, current_user: action.payload}
    default: return state;
  }
}

export default globalStateReducer
