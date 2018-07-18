import React from 'react';
import {connect} from 'react-redux';
import LeagueTeamCard from './LeagueTeamCard'
import {getPendingApprovalTeams} from '../../../ducks/reducers/teamReducer'
import axios from 'axios';

export class PendingTeams extends React.Component{
    constructor(props){
        super(props);

        this.approveTeam = this.approveTeam.bind(this);
    }

    approveTeam(teamID){
        axios.put(`/api/team/update/${teamID}`, this.props.user).then((result)=> {
            this.props.getPendingApprovalTeams(this.props.user.user_id);
        }).catch(err=> {
            console.log(`Error while attempting to approve: ${err}`)
        })
    }

    render(){
        console.log(this.props.pendingApproval)
        let pendingTeams = [];

        if(this.props.pendingApproval){
            pendingTeams = this.props.pendingApproval.map((team)=> {
                return <LeagueTeamCard key={team.team_id} team={team} approve={this.approveTeam}/>
            })
        }
        return (
            <div>{pendingTeams}</div>
        )
    }
}

function mapStateToProps(state){
    return {
        user: state.userReducer.user,
        pendingApproval: state.teamReducer.pendingApproval
    }
}

export default connect(mapStateToProps, {getPendingApprovalTeams})(PendingTeams)