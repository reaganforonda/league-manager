import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

export class TeamList extends React.Component{
    constructor(props) {
        super(props);

        this.state={}
    }

    render(){ 
        
        let teams={}

        if(this.props.managedTeams) {
            this.props.managedTeams
        }

        return (
            <div className='team-list-container'>
            
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.userReducer.user,
        managedLeagues: state.leagueReducer.managedLeagues,
        managedTeams : state.teamReducer.managedTeams
    }
}

export default connect(mapStateToProps, {})(withRouter(TeamList))