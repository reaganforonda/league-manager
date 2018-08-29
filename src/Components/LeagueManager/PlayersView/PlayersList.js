import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

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
                    {player.p_first_name}
                </div>
            )
        })

        return (
            <div className='league-players-list-container'>
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