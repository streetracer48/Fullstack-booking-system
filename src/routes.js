import React from 'react';
import { IndexRoute, Router, Route, hashHistory } from 'react-router';

import App from './containers/App'
import Home from './containers/Home'
import Skill from './containers/Skill'
import Work from './containers/Work'
import Life from './containers/Life'
import Contact from './containers/Contact'

export default (
    <Router history={hashHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Home}/>
        <Route path='/skill' component={Skill} />
        <Route path='/work' component={Work} />
        <Route path='/life' component={Life} />
        <Route path='/contact' component={Contact} />
      </Route>
    </Router>

);