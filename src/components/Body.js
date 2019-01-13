import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from '../containers/Home'
import Astronomy from '../containers/Astronomy'
import DataScience from '../containers/DataScience'
import Programming from '../containers/Programming'

class Body extends Component {
  render() {
      return (
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/astronomy' component={Astronomy}/>
        <Route path='/datascience' component={DataScience}/>
        <Route path='/programming' component={Programming}/>
      </Switch>
    )
  }
}

export default Body;
