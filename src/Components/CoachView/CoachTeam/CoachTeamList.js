import React from 'react';
import {connect} from 'react-redux'
import CoachTeamCard from './CoachTeamCard'
import {getManagedTeams} from '../../../ducks/reducers/teamReducer'

export class CoachTeamList extends React.Component{
    constructor(props){
        super(props);

        this.state={}
    }

    componentDidMount(){
        this.props.getManagedTeams(this.props.user.user_id)
    }

    render(){

        let managedTeams=[];

        if(this.props.managedTeams){
            managedTeams = this.props.managedTeams.map((team)=> {
                return <CoachTeamCard key={team.team_id} team={team}/>
            })
        }
        return (
            <div className='coach-team-list-container'>
                {managedTeams}
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        user: state.userReducer.user,
        managedTeams : state.teamReducer.managedTeams
    }
}

export default connect(mapStateToProps, {getManagedTeams})(CoachTeamList);