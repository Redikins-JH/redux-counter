import * as types from '../actions/ActionTypes';


const initialState = {
  color: 'black',
  number: 0
};

function counter(state=initialState, action) {
  switch (action.type) {
    case types.INCREAMENT:
      return {
        ...state,
        number: state.number + 1
      };
    case types.DECREAMENT:
      return {
        ...state,
        number: state.number - 1
      };
    case types.SET_COLOR:
      return {
        ...state,
        color: action.color
      };
    default:
      return state;
  }
}

export default counter;