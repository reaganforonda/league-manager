import React from 'react';
import {Switch, Route} from 'react-router-dom';
import FixtureViewHeader from './SeasonViewHeader';
import SeasonMain from './SeasonMain';
import SeasonAddForm from './SeasonAddForm';

export default function SeasonView(props) {
    return (
        <div className='season-view-container'>
            <FixtureViewHeader/>
            <main className='season-view-main'>
                <Switch>
                    <Route exact path='/leaguemanager/season' component={SeasonMain}/>
                    <Route path='/leaguemanager/season/add' component={SeasonAddForm}/>
                </Switch>
            </main>
        </div>
    )
}