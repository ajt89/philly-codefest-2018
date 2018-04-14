import React from 'react';
import {BrowserRouter, Link, Switch, Route} from 'react-router-dom';
import {withRouter} from 'react-router';

import {Home} from '../../Views';

function AppRouter(props) {
  return (
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
  );
}

export default AppRouter;
