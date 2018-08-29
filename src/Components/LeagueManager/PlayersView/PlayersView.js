import React from 'react';
import {Switch, Route} from 'react-router-dom';
import PlayersViewHeader from './PlayersViewHeader';

export default function PlayersView(props) {
    return (
        <div className='league-players-container'>
            <PlayersView/>
            <main className='players-view-main'>
                <Switch>


                </Switch>
            </main>
        </div>
    )
}