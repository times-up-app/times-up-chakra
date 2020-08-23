import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from './Landing';
import About from './About';
import Settings from './Settings';
import CreateMeeting from './CreateMeeting';
import JoinMeeting from './JoinMeeting';
import Timeline from './Timeline';

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Landing}></Route>
      <Route exact path='/about' component={About}></Route>
      <Route exact path='/settings' component={Settings}></Route>
      <Route exact path='/create' component={CreateMeeting}></Route>
      <Route exact path='/join' component={JoinMeeting}></Route>
      <Route exact path='/meeting-:id' component={Timeline}></Route>
    </Switch>
  );
}

export default Routes;
