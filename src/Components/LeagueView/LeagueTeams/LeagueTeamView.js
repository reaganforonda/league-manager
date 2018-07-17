import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

export class LeagueTeamView extends React.Component{
    render(){
        return(
            <div className='league-team-view-container'>
                League Team View
            </div>
        )
    }
}

function mapStateToProps(state){
    return {

    }
}

export default connect(mapStateToProps, {})(withRouter(LeagueTeamView))