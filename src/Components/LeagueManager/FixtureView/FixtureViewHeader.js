import React from 'react';
import {Link} from 'react-router-dom';


export default function FixtureViewHeader(props){
    return (
        <header className='fixture-view-header'>
            <div className='fixture-view-header-menu'>
                <Link to='/leaguemanager/fixtures'>Main</Link>
                <Link to='/leaguemanager/fixtures/add'>Add</Link>
            </div>
        </header>
    )
}