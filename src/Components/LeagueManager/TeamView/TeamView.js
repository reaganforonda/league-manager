import React from 'react';
import {Switch, Route} from 'react-router-dom';
import TeamViewHeader from './TeamViewHeader';
import TeamMain from './TeamMain';
import TeamAddForm from './TeamAddForm';

export default function TeamView(props) {
    return (
        <div className='league-team-view-container'>
            <TeamViewHeader/>
            <main className='league-team-view-main'>
                <Switch>
                    <Route exact path='/leaguemanager/teams' component={TeamMain}/>
                    <Route path='/leaguemanager/teams/add' component={TeamAddForm}/>
                </Switch>
            </main>
        </div>
    )
}