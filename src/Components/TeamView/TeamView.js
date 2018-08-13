import React from 'react';
import {withRouter} from 'react-router-dom';
import TeamViewMenu from './TeamViewMenu'

export class TeamView extends React.Component{
    constructor(props){
        super(props);

        this.state={

        }
    }

    render(){
        return (
            <div className='team-view-container'>
                <TeamViewMenu/>
                <div className='team-view-main'>
                    Team View
                </div>
            </div>
        )
    }
}

export default withRouter(TeamView);