import React from 'react';


export default class LeagueViewHeader extends React.Component{
    constructor(props){
        super(props);

        this.state={}
    }

    render(){
        return(
            <div className='league-view-header'>
                <ul className='league-view-header-menu'>
                    <li>Create League</li>
                    <li>View Leagues</li>
                </ul>
            </div>
        )
    }
}