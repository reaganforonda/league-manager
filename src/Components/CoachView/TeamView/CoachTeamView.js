import React from 'react';
import CoachTeamViewHeader from './CoachTeamViewHeader'
import CoachTeamForm from './CoachTeamForm';
import {connect} from 'react-redux'

import {getManagedTeams} from '../../../ducks/reducers/teamReducer'

export class CoachTeamView extends React.Component{
    constructor(props){
        super(props);

        this.state={}
    }

    componentDidMount(){
        this.props.getManagedTeams();
    }

    render(){
        return(
            <div className='coach-team-view-container'>
                <CoachTeamViewHeader/>
                <CoachTeamForm/>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        managedTeams: state.teamReducer.managedTeams
    }
}

export default connect(mapStateToProps, {getManagedTeams})(CoachTeamView)