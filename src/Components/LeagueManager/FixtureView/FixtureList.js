import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import * as generalUtil from '../../../Utilities/generalUtil';

export class FixtureList extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            allFixtures: []
        }
    }

    componentDidMount(){
        this.setState({allFixtures : this.props.allFixtures})
    }

    render(){
        console.log(this.state.allFixtures);
        let allFixtures = this.state.allFixtures.map((fixture, index) => {
            return (
                <div className='league-fixture-list-row' key={fixture.fixture_id+fixture.fixture_date}>
                    <div>{fixture.league_name}</div>
                    <div>{generalUtil.formatDate(fixture.fixture_date)}</div>
                    <div>{generalUtil.formatTime(fixture.fixture_date)}</div>
                    <div>{fixture.home_team}</div>
                    <div>{fixture.away_team}</div>
                </div>
            )
        })

        return (
            <div className='league-fixture-list-container'>
                <div className='league-fixture-row-header'>
                    <h2>League</h2>
                    <h2>Fixture Date</h2>
                    <h2>Time</h2>
                    <h2>Home Team</h2>
                    <h2>Away Team</h2>
                </div>
                {allFixtures}
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        user: state.userReducer.user,
        managedLeagues: state.leagueReducer.managedLeagues,
        managedTeams : state.teamReducer.managedTeams,
        allFixtures : state.fixtureReducer.allFixtures
    }
}

export default connect(mapStateToProps, {})(withRouter(FixtureList))