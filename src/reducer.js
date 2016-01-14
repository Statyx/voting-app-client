import {Map} from 'immutable';
// TODO Modernize syntax


const setState = (state, newState) => {
  return state.merge(newState);
}

function vote(state, entry) {
  const currentPair = state.getIn(['vote', 'pair']);
  if (currentPair && currentPair.includes(entry)) {
    return state.set('hasVoted', entry);
  } else {
    return state;
  }
}

const reducer = (state = Map(), action) => {
  switch (action.type) {
  case 'SET_STATE':
    return setState(state, action.state);
  case 'VOTE':
    return vote(state, action.entry);
  }
  return state;
}


export default reducer;
