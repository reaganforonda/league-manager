import React from 'react';
import {Link} from 'react-router-dom';

export default function PlayersViewHeader (props) {
    return (
        <header className='view-header'>
            <div className='view-header-menu'>
                <div className='view-header-menu-item'>
                    <Link to='/leaguemanager/players'>Main</Link>
                </div>
                <div className='view-header-menu-item'>
                    <Link to='/leaguemanager/players/add'>Add</Link>
                </div>
            </div>
        </header>
    )
}