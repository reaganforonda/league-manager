import React from 'react';
import {Link} from 'react-router-dom';

export default function StadiumViewHeader(props){
    return (
        <header className='stadium-view-header'>
            <ul className='stadium-view-header-menu'>
                <li className='stadium-view-header-menu-item'>
                    All Stadiums
                </li>
                <li className='stadium-view-header-menu-item'>
                    <Link to='/league/dashboard/locations/add'>Add Location</Link>
                </li>
            </ul>
        </header>
    )
}