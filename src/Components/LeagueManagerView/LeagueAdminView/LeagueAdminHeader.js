import React from 'react'

export default function LeagueAdminHeader(props){
    return (
        <div className='league-admin-header'>
            <ul className='league-admin-header-menu'>
                <li className='league-admin-header-menu-item'>
                    Home
                </li>
                <li className='league-admin-header-menu-item'>
                    Games
                </li>
                <li className='league-admin-header-menu-item'>
                    Seasons
                </li>
            </ul>
        </div>
    )
}