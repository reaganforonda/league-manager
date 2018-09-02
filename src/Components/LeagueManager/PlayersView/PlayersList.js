import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import * as genUtil from '../../../Utilities/generalUtil';

export class PlayersList extends React.Component {
    constructor(props) {
        super(props);

        this.state={
            allPlayers: []
        }
    }

    componentDidMount(){
        this.setState({allPlayers: this.props.allPlayersLeagueManager});
    }

    render(){
        let allPlayers = this.state.allPlayers.map((player, index) => {
            return (
                <div className='league-players-list-row' key={player.player_id+player.p_first_name} >
                    <div>{player.p_first_name}</div>
                    <div>{player.p_last_name}</div>
                    <div>{player.team_name}</div>
                    <div>{genUtil.calcAge(player.birthday)}</div>
                    <div><input type='checkbox' disabled checked={player.active}/></div>
                </div>
            )
        })

        return (
            <div className='league-players-list-container'>
                <div className='league-player-list-header'>
                    <h2>First Name</h2>
                    <h2>Last Name</h2>
                    <h2>Team</h2>
                    <h2>Age</h2>
                    <h2>Active</h2>
                </div>

                {allPlayers}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.userReducer.user,
        allPlayersLeagueManager: state.playerReducer.allPlayersLeagueManager
    }
}

export default connect(mapStateToProps, {})(withRouter(PlayersList));