import React from 'react';
import {Switch, Route} from 'react-router-dom';
import LeagueViewHeader from './LeagueViewHeader';

export default function LeagueView(props){
    return (
        <div className='league-view-container'>
            <LeagueViewHeader/>
            <div className='league-view-main'>
                <Switch>
                
                </Switch>
            </div>
        </div>
    )
}