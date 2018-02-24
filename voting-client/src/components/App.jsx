import React from 'react';
import {List, Map} from 'immutable';
import {Switch,Route} from 'react-router-dom';
import Voting from './Voting';
import Results from './Results';

const pair = List.of('Trainspotting', '28 Days Later');
const tally = Map({'Trainspotting': 5, '28 Days Later': 4});

const App = () => {
  return(
    <Switch>
      <Route exact path="/" render={((props) => {
        return <Voting {...props} pair={pair} tally={tally} />;
      })} />
      <Route path="/results" render={((props) => {
        return <Results {...props} pair={pair} tally={tally} />;
      })} />
    </Switch>
  );
};
export default App;
