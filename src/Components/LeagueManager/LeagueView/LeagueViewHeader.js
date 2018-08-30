import React from 'react';
import {Link} from 'react-router-dom';


export default function LeagueViewHeader(props){
    return (
        <header className='league-view-header'>
            <div className='league-view-header-menu'>
                <Link to='/leaguemanager/leagueview'>Main</Link>
                <Link to='/leaguemanager/leagueview/add'>Add</Link>
            </div>
        </header>
    )
}