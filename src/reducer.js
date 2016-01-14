import {Map} from 'immutable';
// TODO Modernize syntax


const setState = (state, newState) => {
  return state.merge(newState);
}

const reducer = (state = Map(), action) => {
  switch (action.type) {
  case 'SET_STATE':
    return setState(state, action.state);
  }
  return state;
}


export default reducer;
