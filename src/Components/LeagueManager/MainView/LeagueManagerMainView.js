import React from 'react';
import {Switch, Route, withRouter} from 'react-router-dom';
import LeagueManagerDashboard from '../Dashboard/Dashboard'
import LeagueView from '../LeagueView/LeagueView';
import TeamView from '../TeamView/TeamView';
import FixtureView from '../FixtureView/FixtureView';
import SideNav from '../SideMenu/SideNav';
import Header from '../../Header/Header';
import axios from 'axios';
import {connect} from 'react-redux';
import {getManagedLeagues} from '../../../ducks/reducers/leagueReducer';
import SeasonView from '../SeasonView/SeasonView';

export class LeagueManagerMainView extends React.Component {
    constructor(props){
        super(props);

        this.state={}
    }

    componentDidMount = async ()=> {
        await axios.get('/api/auth/me').then((users) => {
            this.props.getManagedLeagues(this.props.user.user_id);
        }).catch((err) => {
            this.props.history.push('/')
        })
    }

    render(){
        return (
            <div className='league-main-view-container'>
                <Header/>
                <main className='league-main-view-main'>
                    <SideNav/>
                    <Switch>
                        <Route path='/leaguemanager/dashboard' component={LeagueManagerDashboard}/>
                        <Route path='/leaguemanager/leagueview' component={LeagueView}/>
                        <Route path='/leaguemanager/teams' component={TeamView}/>
                        <Route path='/leaguemanager/fixtures' component={FixtureView}/>
                        <Route pather='/leaguemanager/seasons' component={SeasonView}/>
                    </Switch>
                </main>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.userReducer.user,
        managedLeagues : state.leagueReducer.managedLeagues
    }
}

export default connect(mapStateToProps, {getManagedLeagues})(withRouter(LeagueManagerMainView));