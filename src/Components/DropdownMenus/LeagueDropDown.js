import React from 'react';

export default function LeagueDropDown (props) {
    console.log(props.leagues);

    let leagues = props.leagues.map((value, i) => {
        return <option key={value.league_id + i} value={value.league_id} >{value.league_name}</option>
    })

    return (
        <select className='league-drop-down'>
            <option value="" disabled selected>Select League</option>
            {leagues};
        </select>
    )
}