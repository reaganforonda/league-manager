import React from 'react';
import {Switch, Route} from 'react-router-dom';
import StadiumMain from './StadiumMain';
import StadiumAddForm from './StadiumAddForm';
import StadiumViewHeader from './StadiumViewHeader';

export default function StadiumView(props) {
    return (
        <div className='view-container'>
            <main className='stadium-view-main'>
                <StadiumViewHeader/>
                <Switch>
                    <Route exact path="/leaguemanager/stadiums" component={StadiumMain}/>
                    <Route path='/leaguemanager/stadiums/add' component={StadiumAddForm}/>
                </Switch>
            </main>
        </div>
    )
}