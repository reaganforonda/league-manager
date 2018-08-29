import React from 'react';

export default function TeamDropDown (props){
    let teams = props.teams.map((value, i) => {
        return <option key={value.team_id + } value={value.team_id}> {value.team_id} </option>
    });


    return (
        <select onChange={(e) => prop.selectTeam(e)} name='teamID' className='team-drop-down'>
            <option value='' disabled selected>Select Team</option>
            {teams}
        </select>
    )
}

