import React from 'react';
import {BrowserRouter, Link, Switch, Route} from 'react-router-dom';
import {withRouter} from 'react-router';

import {Home, Account, Login, CreateEvent} from '../../Views';

function AppRouter(props) {
  return (
    <Switch>
      <Route path="/" exact={true} component={Home} />
      <Route path="/account" exact={true} component={Account} />
      <Route path="/login" exact={true} component={Login} />
      <Route path="/event/create" exact={true} component={CreateEvent} />
    </Switch>
  );
}

export default AppRouter;
