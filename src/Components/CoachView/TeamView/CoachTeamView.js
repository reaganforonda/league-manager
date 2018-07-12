import React from 'react';
import CoachTeamViewHeader from './CoachTeamViewHeader'

export default class CoachTeamView extends React.Component{
    constructor(props){
        super(props);

        this.state={}
    }

    render(){
        return(
            <div className='coach-team-view-container'>
                <CoachTeamViewHeader/>
            </div>
        )
    }
}