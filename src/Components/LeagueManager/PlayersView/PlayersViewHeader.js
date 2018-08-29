import React from 'react';
import {Link} from 'react-router-dom';

export default function PlayersViewHeader (props) {
    return (
        <header className='league-player-view-header'>
            <div className='league-player-view-menu'>
                <Link to='/leaguemanager/players'>Main</Link>
                <Link to='/leaguemanager/players/add'>Add</Link>
            </div>
        </header>
    )
}