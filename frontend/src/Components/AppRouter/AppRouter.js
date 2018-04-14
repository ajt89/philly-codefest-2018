import React from 'react';
import {BrowserRouter, Link, Switch, Route} from 'react-router-dom';
import {withRouter} from 'react-router';

import {Home, Account} from '../../Views';

function AppRouter(props) {
  return (
    <Switch>
      <Route path="/" exact={true} component={Home} />
      <Route path="/account" exact={true} component={Account} />
    </Switch>
  );
}

export default AppRouter;
