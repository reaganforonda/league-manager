import React from 'react';
import {Link} from 'react-router-dom'

export default function LeagueListViewHeader(props){
    return (
        <div className='league-list-view-header'>
            <ul className='league-list-view-head-menu'>
                <li><Link to='/league/dashboard/leaguelistview/list'>Managed Leagues</Link></li>
                <li><Link to='/league/dashboard/leaguelistview/add'>Add Managed League</Link></li>
            </ul>
        </div>
    )
}