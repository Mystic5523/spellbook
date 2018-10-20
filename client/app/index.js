import React from 'react';
import { render } from 'react-dom';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import App from './components/App/App';
import NotFound from './components/App/NotFound';

import Home from './components/Home/Home';

import HelloWorld from './components/HelloWorld/HelloWorld';
import Userpage from './views/Userpage';
import Spelllist from './views/Spelllist';
import Spellbook from './views/Spellbook';


import './styles/styles.scss';
// import 'bootstrap/dist/css/bootstrap.min.css';

render((
  <Router>
    <App>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/helloworld" component={HelloWorld}/>
        <Route exact path='/user' component={Userpage} />
        <Route exact path='/list' component={Spelllist} />
        <Route exact path='/book' component={Spellbook} />
        <Route component={NotFound}/>
      </Switch>
    </App>
  </Router>
), document.getElementById('app'));
