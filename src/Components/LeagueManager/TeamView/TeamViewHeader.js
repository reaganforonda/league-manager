import React from 'react';
import {Link} from 'react-router-dom';

export default function TeamViewHeader (props) {
    return (
        <header className='view-header'>
            <div className='view-header-menu'>
                <div className='view-header-menu-item'>
                    <Link to='/leaguemanager/teams/add'>Add</Link>
                </div>
                <div className='view-header-menu-item'>
                    <Link to='/leaguemanager/teams'>Main</Link>
                </div>
            </div>
        </header>
    )
}