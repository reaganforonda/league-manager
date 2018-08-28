import React from 'react';
import {Switch, Route} from 'react-router-dom';
import FixtureMain from './FixtureMain';
import FixtureAddForm from './FixtureAddForm';

export default function FixtureView(props) {
    return (
        <div className='fixture-view-container'>
            
            <main className='fixture-view-main'>
                <Switch>
                    <Route exact pather='/leaguemanager/fixtures' component={FixtureMain}/>
                    <Route path='/leaguemanager/fixtures/add' component={FixtureAddForm}/>
                </Switch>
            </main>
        
        </div>
    )
}