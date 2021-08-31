import React from 'react';

//styles
import './App.css';

//reat-router-dom
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import TaskId from './pages/taskId';
import Home from './pages/home';
import Error404 from './pages/Error404';

function App() {
  return (
    <div>
      <Router>
          <Switch>
              <Route exact path="/">
                  <Home />
              </Route>
              <Route path="/task/:id">
                  <TaskId />
              </Route>
              <Route path="*">
                  <Error404 />
              </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
