import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Landing from './Components/Landing';
import Login from './Components/Login';
import CoachDashboard from './Components/CoachView/CoachDashboard'
import Register from './Components/Register/Register'

export default (
    <Switch>
        <Route exact path='/' component={Landing}/>
        <Route path='/login' component={Login}/>
        <Route path='/register' component={Register}/>
        <Route path='/coach/dashboard' component={CoachDashboard}/>
    </Switch>
)