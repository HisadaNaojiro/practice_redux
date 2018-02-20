import React from 'react';

export default class Vote extends React.PureComponent{

  constructor(props){
    super(props);
  }

  isDisabled(){
    return !!this.props.hasVoted;
  }
  
  hasVotedFor(entry){
    return this.props.hasVoted === entry;
  }

  render(){
    return(
      <div className="voting">
        {this.props.pair.map(entry =>
          <button key={entry} disabled={this.isDisabled()} onClick={() => this.props.vote(entry)}>
            <h1>{entry}</h1>
            {this.hasVotedFor(entry)? <div className="label">Voted</div> : null}
          </button>
        )}
      </div>
    );
  }
}
