import React from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';

import PatientList from './components/Liste/patientenList'
import PatientDetails from './components/Liste/patientenDetails'
import Impressum from './components/impressum'
import Datenschutz from './components/datenschutz'

export default function App() {
  return (
    <Router>
      <div className="ui stackable menu">
        <NavLink to="/" className="item" activeClassName="active">Home</NavLink>
        <NavLink to="/impressum" className="item" >Impressum</NavLink>
        <NavLink to="/datenschutz" className="item" >Datenschutz</NavLink>
      </div>

      <Switch>

        <Route path='/patienten/:id'>
          <PatientDetails />
        </Route>


        <Route path='/404'>
          <p>404</p>
        </Route>

        <Route path='/impressum'>
          <Impressum />
        </Route>

        <Route path='/datenschutz'>
          <Datenschutz />
        </Route>

        <Route path='/'>
          <PatientList />
        </Route>


      </Switch>
    </Router>
  )
}
