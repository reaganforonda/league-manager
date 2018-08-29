import React from 'react';
import {Link} from 'react-router-dom';

export default function TeamViewHeader (props) {
    return (
        <header className='league-team-view-header'>
            <div className='league-team-view-menu'>
                <Link to='/leaguemanager/teams'>Main</Link>
                <Link to='/leaguemanager/teams/add'>Add</Link>
            </div>
        </header>
    )
}