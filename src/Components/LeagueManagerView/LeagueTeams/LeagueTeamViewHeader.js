import React from 'react';
import {Link} from 'react-router-dom'

export default function LeagueTeamViewHeader(props){
    return (
        <ul className='league-team-view-header'>
            <li>View All Teams</li>
            <li><Link to='/league/dashboard/teamview/pending'>View Pending Approvals</Link></li>
        </ul>
    )
}