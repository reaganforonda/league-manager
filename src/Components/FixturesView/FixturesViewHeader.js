import React from 'react';
import {Link} from 'react-router-dom'

export default function FixturesViewHeader(props){
    return (
        <header className='fixture-view-header'>
            <ul className='fixture-view-header-menu'>
                <li className='fixture-view-header-menu-item'>
                    <Link to='/league/dashboard/leagueadmin/fixtures/list'>Upcoming Fixtures</Link>
                </li>
                <li className='fixture-view-header-menu-item'>
                    <Link to='/league/dashboard/leagueadmin/fixtures/add'>Add Fixture</Link>
                </li>
                <li className='fixture-view-header-menu-item'>
                    Update Fixture Stats
                </li>
            </ul>
        </header>
    )
}