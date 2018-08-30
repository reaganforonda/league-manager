import React from 'react';
import {Link} from 'react-router-dom';


export default function FixtureViewHeader(props){
    return (
        <header className='view-header'>
            <div className='view-header-menu'>
                <div className='view-header-menu-item'>
                    <Link to='/leaguemanager/fixtures'>Main</Link>
                </div>
                <div className='view-header-menu-item'>
                    <Link to='/leaguemanager/fixtures/add'>Add</Link>
                </div>
            </div>
        </header>
    )
}