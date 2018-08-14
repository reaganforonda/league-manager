import React from 'react'
import {Link} from 'react-router-dom';

export default function LeagueAdminHeader(props){
    return (
        <div className='league-admin-header'>
            <ul className='league-admin-header-menu'>
                <li className='league-admin-header-menu-item'>
                    Home
                </li>
                <li className='league-admin-header-menu-item'>
                    <Link to='/league/dashboard/leagueadmin/fixtures'>Fixtures</Link>
                </li>
                <li className='league-admin-header-menu-item'>
                    <Link to='/league/dashboard/leagueadmin/seasons'>Seasons</Link>
                </li>
            </ul>
        </div>
    )
}