import React from 'react';
import {connect} from 'react-redux'

export class FixtureListView extends React.Component{
    constructor(props){
        super(props);

        this.state={}
    }

    render(){
        return (
            <div className='fixture-list-view-container'>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        user: state.userReducer.user,
        selectedLeague: state.leagueReducer.selectedLeague,
        seasonsLeague: state.leagueReducer.seasonsLeague,
        allStadiums: state.stadiumReducer.allStadiums,
        teamsByLeague: state.teamReducer.teamsByLeague
    }
}

export default connect(mapStateToProps, {})(FixtureListView)