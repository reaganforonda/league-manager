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

    componentDidMount(){
        this.setState({allFixtures : this.props.allFixtures})
    }

    render(){
        let allFixtures = this.state.allFixtures.map((fixture, index) => {
            return (
                <div className='league-fixture-list-row' key={fixture.fixture_id+fixture.fixture_date}>
                    {fixture.league_id}
                    {fixture.fixture_id}
                    {fixture.home_team}
                    {fixture.away_team}
                </div>
            )
        })

        return (
            <div className='league-fixture-list-container'>
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