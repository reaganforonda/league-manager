import React from 'react';
import CoachTeamViewHeader from './CoachTeamViewHeader'
import CoachTeamForm from './CoachTeamForm';
import CoachTeamList from '../CoachTeam/CoachTeamList'
import {connect} from 'react-redux'
import {Switch, Route} from 'react-router-dom';

export class CoachTeamView extends React.Component{
    constructor(props){
        super(props);

        this.state={}
    }

    render(){
        
        return(
            <div className='coach-team-view-container'>
                <CoachTeamViewHeader/>
                <div className='coach-team-view-main'>
                    <Switch>
                        <Route path='/coach/dashboard/teamview/add' component={CoachTeamForm}/>
                        <Route path='/coach/dashboard/squadview/list' component={CoachTeamList}/>
                    </Switch>
                </div>
                
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