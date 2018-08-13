import React from 'react';

export default function ManagedLeaguesCard(props){
    return (
        <div className='managed-leagues-card'>
            <p>League Name: {props.league.league_name}</p>
            <p>City: {props.league.league_city}</p>
            <p>State: {props.league.league_state}</p>
            <p>Zip: {props.league.league_zip}</p>
        </div>
    )
}