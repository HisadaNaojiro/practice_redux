import React from 'react';

const Vote = (props) => {
  const isDisabled = !!props.hasVoted;
  const hasVotedFor = (entry) => {return props.hasVoted === entry };

  return(
    <div className="voting">
      {props.pair.map(entry =>
        <button key={entry} disabled={isDisabled} onClick={() => props.vote(entry)}>
          <h1>{entry}</h1>
          {hasVotedFor(entry)? <div className="label">Voted</div> : null}
        </button>
      )}
    </div>
  );
};

export default Vote;

