import React from 'react'
import ReactDOM from 'react-dom'
import App from './App';
import Search from './search';
import './index.css'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


const routes = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/search" component={Search} />
    </div>
  </Router>
);

ReactDOM.render(routes, document.getElementById('root'))
