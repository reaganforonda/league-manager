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
                <CoachTeamCard team={team}/>
            })
        }
        console.log(this.props.managedTeams)

        return (
            <div className='coach-team-list-container'>
                {managedTeams}
                <p>duh</p>
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