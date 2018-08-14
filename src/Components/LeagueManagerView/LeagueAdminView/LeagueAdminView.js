import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import LeagueAdminHeader from './LeagueAdminHeader'

export class LeagueAdminView extends React.Component{
    constructor(props){
        super(props);

        this.state={
        }
    }

    render(){
        return(
            <div className='league-admin-view-container'>
                <LeagueAdminHeader/>
                <main className='league-admin-view-main'>
                Selected League: {this.props.selectedLeague};    
                </main>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.userReducer.user,
        selectedLeague: state.leagueReducer.selectedLeague
    }
}

export default connect(mapStateToProps, {})(withRouter(LeagueAdminView));