import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from './Landing';
import About from './About';
import CreateMeeting from './CreateMeeting';

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Landing}></Route>
      <Route exact path='/About' component={About}></Route>
      <Route exact path='/create-meeting' component={CreateMeeting}></Route>
    </Switch>
  );
}

export default Routes;
