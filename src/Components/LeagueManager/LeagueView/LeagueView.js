import React from 'react';
import {Switch, Route} from 'react-router-dom';
import LeagueViewHeader from './LeagueViewHeader';
import LeagueAddForm from './LeagueAddForm';
import LeagueMain from './LeagueMain';

export default function LeagueView(props){
    return (
        <div className='league-view-container'>
            <LeagueViewHeader/>
            <div className='league-view-main'>
                <Switch>
                    <Route exact path='/leaguemanager/leagueview' component={LeagueMain}/>
                    <Route path='/leaguemanager/leagueview/add' component={LeagueAddForm}/>
                </Switch>
            </div>
        </div>
    )
}