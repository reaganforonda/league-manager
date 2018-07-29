import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Landing from './Components/Landing';
import Login from './Components/Login';
import CoachDashboard from './Components/CoachView/CoachDashboard';
import Register from './Components/Register/Register';
import LeagueDashboard from './Components/LeagueView/LeagueDashboard';
import Error500View from './Components/ErrorViews/Error500View';
import Error400View from './Components/ErrorViews/Error400View';
import Error401View from './Components/ErrorViews/Error401View';

import RegisterLeague from './Components/Register/RegisterLeague';


export default (
    <Switch>
        <Route exact path='/' component={Landing}/>
        <Route path='/login' component={Login}/>
        <Route path='/register' component={Register}/>
        <Route path='/registerleague' component={RegisterLeague}/>
        <Route path='/coach/dashboard' component={CoachDashboard}/>
        <Route path='/league/dashboard' component={LeagueDashboard}/>
        <Route path='/error/500' component={Error500View}/>
        <Route path='/error/401' component={Error401View}/>
        <Route path='/error/400' component={Error400View}/>
    </Switch>
)