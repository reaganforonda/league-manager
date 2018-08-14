import React from 'react';

export default function ManagedLeaguesCard(props){
    return (
        <div className='managed-leagues-card' onClick={()=>props.selectLeague(props.league.league_id)}>
            <p>League Name: {props.league.league_name}</p>
            <p>City: {props.league.league_city}</p>
            <p>State: {props.league.league_state}</p>
            <p>Zip: {props.league.league_zip}</p>
        </div>
    )
}