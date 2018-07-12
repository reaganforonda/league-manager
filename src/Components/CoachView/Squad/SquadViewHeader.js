import React from 'react'


export default class SquadViewHeader extends React.Component{
    render(){
        return (
            <div className='squad-view-header-container'>
                <ul className='squad-view-header-list'>
                    <li>Add Player</li>
                    <li>View Roster</li>
                </ul>
            
            </div>
        )
    }
}