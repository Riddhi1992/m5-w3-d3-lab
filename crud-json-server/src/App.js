import React, {Component} from "react";
import Bookedit from './Bookedit';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact={true} component={Home} />
          <Route path='/list/:id' component={Bookedit} />
        </Switch>
      </Router>
    )
  }
}

export default App;