import React from 'react';

//styles:
import './App.css';

//material-ui:
import Container from '@material-ui/core/Container';

//react-router-dom:
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

//pages:
import { routers } from './routers/routers';

function App() {
  return (
    <Container maxWidth="lg">
      <Router>
          <Switch>
              {routers.map( ({path, Component, isExact}) =>
                  <Route key={path} path={path} exact={isExact} component={Component} />
              )}
          </Switch>
      </Router>
    </Container>
  );
}

export default App;
