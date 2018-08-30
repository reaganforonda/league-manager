import React from 'react';
import {Link} from 'react-router-dom';

export default function SideNave(props){
    return (
        <div className='league-side-nav'>
            <div className='league-side-nav-menu'>
                <div className='league-side-nav-menu-item'>
                    <Link to='/leaguemanager/dashboard'>Dashboard</Link>
                </div>
                <div className='league-side-nav-menu-item'>
                    <Link to='/leaguemanager/leagueview'>Leagues</Link>
                </div>
                <div className='league-side-nav-menu-item'>
                    <Link to='/leaguemanager/seasons'>Seasons</Link>
                </div>
                <div className='league-side-nav-menu-item'>
                    <Link to='/leaguemanager/fixtures'>Fixtures</Link>
                </div>
                <div className='league-side-nav-menu-item'>
                    <Link to='/leaguemanager/teams'>Teams</Link>
                </div>
                <div className='league-side-nav-menu-item'>
                    <Link to='/leaguemanager/players'>Players</Link>
                </div>
                <div className='league-side-nav-menu-item'>
                    <Link to='/leaguemanager/stadiums'>Stadiums</Link>
                </div>
            </div>  
        </div>
    )
}