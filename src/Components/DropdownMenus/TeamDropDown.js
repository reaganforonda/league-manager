import React from 'react';

export default function TeamDropDown (props){
    let teams = props.teams.map((team, i) => {
        if(~~props.league === team.league_id){
            return <option key={~~team.team_id + team.team_name} value={team.team_id}> {team.team_name} </option>
        }
    });

    return (
        <select onChange={(e) => props.selectTeam(e)} name={props.name} className='team-drop-down'>
            <option value='' disabled selected>Select Team</option>
            {teams}
        </select>
    )
}

