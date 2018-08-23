import React from 'react';
import {Switch, Route, withRouter} from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard'
import SideNav from '../SideMenu/SideNav';
import Header from '../../Header/Header';

export default function LeagueManagerMainView(props) {
    return (
        <div className='league-main-view-container'>
            <Header/>
            <main className='league-main-view-main'>
                <SideNav/>
                <Switch>
                    <Route path='/league/dashboard' component={Dashboard}></Route>
                </Switch>
            </main>
        </div>
    )
}