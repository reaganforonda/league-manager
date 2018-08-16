import React from 'react';

export default function StadiumViewHeader(props){
    return (
        <header className='stadium-view-header'>
            <ul className='stadium-view-header-menu'>
                <li className='stadium-view-header-menu-item'>
                    All Stadiums
                </li>
                <li className='stadium-view-header-menu-item'>
                    Add Stadium
                </li>
            </ul>
        </header>
    )
}