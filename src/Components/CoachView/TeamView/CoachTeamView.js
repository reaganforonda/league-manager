import React from 'react';
import CoachTeamViewHeader from './CoachTeamViewHeader'
import CoachTeamForm from './CoachTeamForm';
import CoachTeamList from '../CoachTeam/CoachTeamList'
import {connect} from 'react-redux'

export class CoachTeamView extends React.Component{
    constructor(props){
        super(props);

        this.state={}
    }

    render(){
        
        return(
            <div className='coach-team-view-container'>
                <CoachTeamViewHeader/>
                <CoachTeamForm/>
                <CoachTeamList/>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        managedTeams: state.teamReducer.managedTeams
    }
}

export default connect(mapStateToProps, {})(CoachTeamView)