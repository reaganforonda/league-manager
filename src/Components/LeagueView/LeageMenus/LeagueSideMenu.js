import React from 'react'

export default class LeagueSideMenu extends React.Component{
    render(){
        return (
            <div className='league-side-menu-container'>
                <ol className='league-side-menu-list'>
                    <li className='league-side-menu-item'>Home</li>
                    <li className='league-side-menu-item'>Leagues</li>
                </ol>
            </div>
        )
    }
}