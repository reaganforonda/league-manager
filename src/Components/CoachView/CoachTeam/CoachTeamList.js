import React from 'react';
import {connect} from 'react-redux'
import CoachTeamCard from './CoachTeamCard'


export class CoachTeamList extends React.Component{
    constructor(props){
        super(props);

        this.state={}
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
        managedTeams : state.teamReducer.managedTeams
    }
}

export default connect(mapStateToProps, {})(CoachTeamList);