import React from 'react';
import {List, Map} from 'immutable';
import {Switch,Route} from 'react-router-dom';
import {VotingContainer} from './Voting';
import {ResultsContainer} from './Results';

const App = () => {
  return(
    <Switch>
      <Route exact path="/" render={((props) => {
        return <VotingContainer {...props} />;
      })} />
      <Route path="/results" render={((props) => {
        return <ResultsContainer {...props} />;
      })} />
    </Switch>
  );
};
export default App;
