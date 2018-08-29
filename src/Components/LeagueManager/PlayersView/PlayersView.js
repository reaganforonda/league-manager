import React from 'react';
import {Switch, Route} from 'react-router-dom';
import PlayersViewHeader from './PlayersViewHeader';
import PlayersMain from './PlayersMain';
import PlayersAddForm from './PlayersAddForm';

export default function PlayersView(props) {
    return (
        <div className='league-players-container'>
            <PlayersViewHeader/>
            <main className='players-view-main'>
                <Switch>
                    <Route exact path='/leaguemanager/players' component={PlayersMain}/>
                    <Route path='/leaguemanager/players/add' component={PlayersAddForm}/>
                </Switch>
            </main>
        </div>
    )
}