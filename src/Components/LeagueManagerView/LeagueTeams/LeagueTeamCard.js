import React from 'react';

export default function LeagueTeamCard(props){
    
    return (
        <div className='league-team-card'>
            <p>Team Name: {props.team.team_name}</p>
            <p>League Name: {props.team.league_name}</p>
            {
                !props.team.approved ? <button onClick={()=> props.approve(props.team.team_id)}>Approve</button> : null
            }
        </div>
    )
}