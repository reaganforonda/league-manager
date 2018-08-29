import React from 'react';
import {Link} from 'react-router-dom';

export default function StadiumViewHeader(props) {
    return (
        <header className='stadium-view-header'>
            <div className='stadium-view-menu'>
                <Link to ='/leaguemanager/stadiums'>Main</Link>
                <Link to ='/leaguemanager/stadiums/add'>Add</Link>
            </div>
        </header>
    )
}