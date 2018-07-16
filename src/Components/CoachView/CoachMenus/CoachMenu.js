import React from 'react';
import {Link} from 'react-router-dom';

export default function CoachMenu(props){
    return (
        <div className='coach-menu-container'>
            <ul className='coach-menu-list'>
                <li><Link className='coach-menu-link' to='/coach/dashboard'>Home</Link></li>
                <li><Link className='coach-menu-link' to='/coach/dashboard/teamview'>Teams</Link></li>
                <li><Link className='coach-menu-link' to='/coach/dashboard/squadview'>Squad</Link></li>
                <li className>Logout</li>
            </ul>
        </div>
    )
}