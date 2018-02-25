import React from 'react';
import {connect} from 'react-redux';
import Winner from './Winner';
import Vote from './Vote';

/* mixminを実現する方法はPureComponentを使用*/
export class Voting extends React.PureComponent{
  
  constructor(props){
    super(props);
  }

  render(){
    return(
      /* stateless componentsにはref属性は付加できないため親に付与使用する場合は、childNodes等を使用*/
      <div>
        {this.props.winner ?
          <Winner ref="winner" winner={this.props.winner} />:
          <Vote {...this.props}  />
        }
      </div>
    );
  }
};

function __mapStateToProps(state){
  return {
    pair: state.getIn(['vote', 'pair']),
    winner: state.get('winner')
  };
}

export const VotingContainer = connect(__mapStateToProps)(Voting); 
