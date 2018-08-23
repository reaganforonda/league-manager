import React from 'react';
import {Switch, Route, withRouter} from 'react-router-dom';
import LeagueManagerDashboard from '../Dashboard/Dashboard'
import LeagueView from '../LeagueView/LeagueView';
import SideNav from '../SideMenu/SideNav';
import Header from '../../Header/Header';

export default function LeagueManagerMainView(props) {
    return (
        <div className='league-main-view-container'>
            <Header/>
            <main className='league-main-view-main'>
                <SideNav/>
                <Switch>
                    <Route path='/leaguemanager/dashboard' component={LeagueManagerDashboard}/>
                    <Route path='/leaguemanager/leagueview' component={LeagueView}/>
                </Switch>
            </main>
        </div>
    )
}