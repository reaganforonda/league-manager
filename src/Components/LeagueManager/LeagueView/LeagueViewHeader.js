import React from 'react';
import {Link} from 'react-router-dom';


export default function LeagueViewHeader(props){
    return (
        <header className='league-view-header'>
            <div className='league-view-header-menu'>
                <div className='league-view-header-menu-item'>
                    <Link to='/leaguemanager/leagueview'>Main</Link>
                </div>
                <div className='league-view-header-menu-item'>
                    <Link to='/leaguemanager/leagueview/add'>Add</Link>
                </div>
            </div>
        </header>
    )
}