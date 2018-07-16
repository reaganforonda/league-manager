import React from 'react';
import {withRouter, Link} from 'react-router-dom';
import axios from 'axios';


export function CoachMenu(props){

    function logout(e){
        e.preventDefault();

        axios.get('/api/auth/logout').then((result)=> {
            props.history.push('/login')
        }).catch((err)=> {
            console.log(err);
        })
    }

    return (
        <div className='coach-menu-container'>
            <ul className='coach-menu-list'>
                <li><Link className='coach-menu-link' to='/coach/dashboard'>Home</Link></li>
                <li><Link className='coach-menu-link' to='/coach/dashboard/teamview'>Teams</Link></li>
                <li><Link className='coach-menu-link' to='/coach/dashboard/squadview'>Squad</Link></li>
                <li onClick={(e)=> logout(e)}className='coach-menu-link'>Logout</li>
            </ul>
        </div>
    )
}

export default withRouter(CoachMenu);