import React from 'react';
import {Link} from 'react-router-dom';


export default function LeagueViewHeader(props){
    return (
        <header className='league-view-header'>
            <ul className='league-view-header-menu'>
                <li>Main</li>
                <li>Add</li>
            </ul>
        </header>
    )
}