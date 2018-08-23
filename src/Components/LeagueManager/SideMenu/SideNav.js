import React from 'react';
import {Link} from 'react-router-dom';

export default function SideNave(props){
    return (
        <div className='league-side-nav'>
            <div className='league-side-nav-menu'>
                <Link to='/leaguemanager/dashboard'>Dashboard</Link>
                <Link to='/leaguemanger/leagueview'>Leagues</Link>
                <Link to='/leaguemanager/seasons'>Seasons</Link>
                <Link to='/leaguemanager/fixtures'>Fixtures</Link>
                <Link to='/leaguemanager/teams'>Teams</Link>
                <Link to='/leaguemanager/players'>Players</Link>
                <Link to='/leaguemanager/stadiums'>Stadiums</Link>
            </div>
        </div>
    )
}