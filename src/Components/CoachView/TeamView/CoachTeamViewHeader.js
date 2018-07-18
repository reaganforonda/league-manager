import React from 'react'
import {Link} from 'react-router-dom';

export default function CoachTeamViewHeader(props){
    return (
        <div className='coach-team-view-header'>
            <ul className='coach-team-view-header-menu'>
                <li><Link to='/coach/dashboard/teamview/add'>Add Team</Link></li>
                <li><Link to='/coach/dashboard/teamview/list'>View Teams</Link></li>
            </ul>
        </div>
    )
}