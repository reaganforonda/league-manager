import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import PlayersList from './PlayersList';

export class PlayersMain extends React.Component{
    constructor(props) {
        super(props);

        this.state = {}
    }

    render(){
        return (
            <div className='league-players-main-container'>
                <PlayersList/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.userReducer.user,
        managedLeagues: state.leagueReducer.managedLeagues
    }
}

export default connect(mapStateToProps, {})(withRouter(PlayersMain));