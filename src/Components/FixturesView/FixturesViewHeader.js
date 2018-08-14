import React from 'react';

export default function FixturesViewHeader(props){
    return (
        <header className='fixture-view-header'>
            <ul className='fixture-view-header-menu'>
                <li className='fixture-view-header-menu-item'>
                    Add Fixture
                </li>
                <li className='fixture-view-header-menu-item'>
                    Update Fixture Stats
                </li>
            </ul>
        </header>
    )
}