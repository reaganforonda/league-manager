import React from 'react';
import {Link} from 'react-router-dom';

export default function PlayersViewHeader (props) {
    return (
        <header className='league-player-view-header'>
            <div className='league-player-view-menu'>
                <Link to=''>Main</Link>
                <Link to=''>Add</Link>
            </div>
        </header>
    )
}