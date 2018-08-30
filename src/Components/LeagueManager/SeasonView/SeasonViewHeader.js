import React from 'react';
import {Link} from 'react-router-dom';

export default function SeasonViewHeader(props) {
    return (
        <header className='view-header'>
            <div className='view-header-menu'>
                <div className='view-header-menu-item'>
                    <Link to='/leaguemanager/seasons'>Main</Link>
                </div>
                <div className='view-header-menu-item'>
                    <Link to='/leaguemanager/seasons/add'>Add</Link>
                </div>
            </div>
        </header>
    )
}