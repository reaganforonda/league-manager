import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {getManagedTeams} from '../../../ducks/reducers/teamReducer';

export class TeamList extends React.Component{
    constructor(props) {
        super(props);

        this.state={
            allTeams : []
        }
    }

    componentDidMount() {
        this.props.getManagedTeams(this.props.user.user_id);
        this.setState({allTeams : this.props.managedTeams})
    }

    render(){ 
        
        let allTeams = this.state.allTeams.map((team, index) => {
            return (
                <div className='league-team-list-row' key={team.team_name + team.team_id + index}>
                {team.league_name}
                {team.team_name}
                {team.team_city}
                {team.team_state}
            </div>
            )
        });
                

        return (
            <div className='league-team-list-container'>
                {allTeams} 
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

export default connect(mapStateToProps, {getManagedTeams})(withRouter(TeamList))