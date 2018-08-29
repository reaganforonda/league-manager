import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

export class FixtureList extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            allFixtures: []
        }
    }

    render(){
        return (
            <div className='league-fixture-list-container'>
            
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

export default connect(mapStateToProps, {})(withRouter(FixtureList))