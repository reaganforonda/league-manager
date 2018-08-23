import React from 'react'
import {withRouter, Link} from 'react-router-dom';
import axios from 'axios';

export function LeagueSideMenu(props){

    function logout(e){
        e.preventDefault();

        axios.get('/api/auth/logout').then((result)=> {
            props.history.push('/login');
        }).catch((err)=> {
            console.log(`Error during logout: ${err}`)
        })
    }
    return (
        <div className='league-side-menu-container'>
            <ul className='league-side-menu-list'>
                <li className='league-side-menu-item'><Link to='/league/dashboard'>Dashboard</Link></li>
                <li className='league-side-menu-item'><Link to='/league/dashboard/leaguelistview/list'>Leagues</Link></li>
                <li className='league-side-menu-item'><Link to='/league/dashboard/teamview'>Teams</Link></li>
                <li className='league-side-menu-item'><Link to='/league/dashboard/locations'>Locations</Link></li>
                <li onClick={(e)=>logout(e)} className='league-side-menu-item'>Log Out</li>
            </ul>
        </div>
    )
}

export default withRouter(LeagueSideMenu);