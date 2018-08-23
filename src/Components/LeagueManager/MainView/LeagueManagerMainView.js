import React from 'react';
import {Switch, Route, withRouter} from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard'
import SideNav from '../SideMenu/SideNav';

export default function LeagueManagerMainView(props) {
    return (
        <div className='league-main-view-container'>
            <div>
                Header Placeholder
            </div>
            <main className='league-main-view-main'>
                <SideNav/>
                <Switch>
                    <Route path='/league/dashboard' component={Dashboard}></Route>
                </Switch>
            </main>
        </div>
    )
}