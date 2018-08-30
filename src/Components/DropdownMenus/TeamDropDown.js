import React from 'react';

export default function TeamDropDown (props){
    let teams = props.teams.map((value, i) => {
        return <option key={~~value.team_id + value.team_name} value={value.team_id}> {value.team_name} </option>
    });

    return (
        <select onChange={(e) => props.selectTeam(e)} name={props.name} className='team-drop-down'>
            <option value='' disabled selected>Select Team</option>
            {teams}
        </select>
    )
}

