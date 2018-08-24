import React from 'react';
import {Switch, Route} from 'react-router-dom';
import TeamViewHeader from './TeamViewHeader';

export default function TeamView(props) {
    return (
        <div className='league-team-view-container'>
            <TeamViewHeader/>
            <main className='league-team-view-main'>
                <Switch>

                </Switch>
            </main>
        </div>
    )
}