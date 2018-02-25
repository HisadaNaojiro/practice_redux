const setState = (state) => {
  return {
    type: 'SET_STATE',
    state
  };
}

const vote = (entry) => {
  return {
    type: 'VOTE',
    entry
  };
}

export {setState,vote};
