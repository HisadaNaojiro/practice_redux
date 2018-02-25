import {List, Map} from 'immutable';

function __setState(state, newState){
    return state.merge(newState);
}

function __vote(state, entry){
  const currentPair = state.getIn(['vote', 'pair']);
  if (currentPair && currentPair.includes(entry)){
    return state.set('hasVoted', entry);
  } else {
    return state;
  }
}

function __resetVote(state){
  const hasVoted = state.get('hasVoted');
  const currentPair = state.getIn(['vote', 'pair'], List());
  if (hasVoted && !currentPair.includes(hasVoted)) {
    return state.remove('hasVoted');
  } else {
    return state;
  }
};

const reducer = (state = Map(), action) =>{
  switch(action.type){
  case 'SET_STATE':
    return __resetVote(__setState(state, action.state));
  case 'VOTE':
    return __vote(state, action.entry);
  }
  return state;
};

export default reducer;
