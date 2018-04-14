import React from 'react';
import {BrowserRouter, Link, Switch, Route} from 'react-router-dom';
import {withRouter} from 'react-router';

import {Home, Account, Login} from '../../Views';

function AppRouter(props) {
  return (
    <Switch>
      <Route path="/" exact={true} component={Home} />
      <Route path="/account" exact={true} component={Account} />
      <Route path="/login" exact={true} component={Login} />
    </Switch>
  );
}

export default AppRouter;
