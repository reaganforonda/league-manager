import React from 'react';
import {Switch, Route} from 'react-router-dom';
import FixtureMain from './FixtureMain';
import FixtureAddForm from './FixtureAddForm';
import FixtureViewHeader from './FixtureViewHeader';

export default function FixtureView(props) {
    return (
        <div className='fixture-view-container'>
            <FixtureViewHeader/>
            <main className='fixture-view-main'>
                <Switch>
                    <Route exact path='/leaguemanager/fixtures' component={FixtureMain}/>
                    <Route path='/leaguemanager/fixtures/add' component={FixtureAddForm}/>
                </Switch>
            </main>
        
        </div>
    )
}