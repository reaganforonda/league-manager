import React from 'react';
import {Link} from 'react-router-dom';

export default function SeasonViewHeader(props) {
    return (
        <header className='season-view-header'>
            <div className='season-view-menu'>
                <Link to='/leaguemanager/seasons'>Main</Link>
                <Link to='/leaguemanager/seasons/add'>Add</Link>
            </div>
        </header>
    )
}