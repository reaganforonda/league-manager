import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import LeagueAdminHeader from './LeagueAdminHeader';
import {withRouter, Switch, Route} from 'react-router-dom';
import FixturesView from '../../FixturesView/FixturesView';

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
                    League Name: {this.props.selectedLeague.league_name}
                    <Switch>
                        <Route path='/league/dashboard/leagueadmin/fixtures' component={FixturesView}/>
                    </Switch>
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