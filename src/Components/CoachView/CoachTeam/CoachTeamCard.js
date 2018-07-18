import React from 'react';

export default function CoachTeamCard(props){
        return (
            <div className='coach-team-card-container'>
                <p>Team Name: {props.team.team_name}</p>
                <p>Team City: {props.team.team_city}</p>
                <p>Approved: {String(props.team.approved)}</p>
            </div>
        )

}