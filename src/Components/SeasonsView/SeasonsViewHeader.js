import React from 'react';
import {Link} from 'react-router-dom';

export default function SeasonsViewHeader(props){
    return(
        <header className='seasons-view-header'>
            <ul className='seasons-view-header-menu'>
                <li className='seasons-view-header-menu-item'>
                    Home
                </li>
                <li className='seasons-view-header-menu-item'>
                    <Link to='/league/dashboard/leagueadmin/seasons/add'>Add Season</Link>
                </li>
            </ul>
        </header>
    )
}