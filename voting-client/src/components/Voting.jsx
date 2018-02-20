import React from 'react';
import Winner from './Winner';
import Vote from './Vote';

export default class Voting extends React.PureComponent{
  
  constructor(props){
    super(props);
  }

  render(){
    return(
      /* stateless componentsにはref属性は付加できないため親に付与使用する場合は、childNodes等を使用*/
      <div ref="winner">
        {this.props.winner ?
          <Winner winner={this.props.winner} />:
          <Vote {...this.props}  />
        }
      </div>
    );
  }
};
