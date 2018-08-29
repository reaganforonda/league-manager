import React from 'react';
import {Switch, Route} from 'react-router-dom';
import FixtureViewHeader from './SeasonViewHeader';
import SeasonMain from './SeasonMain';
import SeasonAddForm from './SeasonAddForm';
import SeasonDetailView from './SeasonDetailView';

export default function SeasonView(props) {
    return (
        <div className='season-view-container'>
            <FixtureViewHeader/>
            <main className='season-view-main'>
                <Switch>
                    <Route exact path='/leaguemanager/seasons' component={SeasonMain}/>
                    <Route path='/leaguemanager/seasons/add' component={SeasonAddForm}/>
                    <Route path='/leaguemanager/seasons/detail' component={SeasonDetailView}/>
                </Switch>
            </main>
        </div>
    )
}