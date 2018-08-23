import React from 'react';
import {Switch, Route, withRouter} from 'react-router-dom';
import LeagueManagerDashboard from '../Dashboard/Dashboard'
import SideNav from '../SideMenu/SideNav';
import Header from '../../Header/Header';

export default function LeagueManagerMainView(props) {
    return (
        <div className='league-main-view-container'>
            <Header/>
            <main className='league-main-view-main'>
                <SideNav/>
                <Switch>
                    <Route path='/leaguemanager/dashboard' component={LeagueManagerDashboard}></Route>
                </Switch>
            </main>
        </div>
    )
}