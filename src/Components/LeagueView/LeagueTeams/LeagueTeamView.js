import React from 'react';
import {withRouter, Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import LeagueTeamViewHeader from './LeagueTeamViewHeader'
import PendingTeams from './PendingTeams'

export class LeagueTeamView extends React.Component{
    render(){
        return(
            <div className='league-team-view-container'>
                <LeagueTeamViewHeader/>
                <div className='league-team-view-main'>
                    <Switch>
                        <Route path='/league/dashboard/teamview/teams'/>
                        <Route path='/league/dashboard/teamview/pending' component={PendingTeams}/>
                    </Switch>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        user: state.userReducer.user
    }
}

export default connect(mapStateToProps, {})(withRouter(LeagueTeamView))