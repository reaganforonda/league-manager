import React from 'react';
import {Switch, Route, withRouter} from 'react-router-dom';
import LeagueManagerDashboard from '../Dashboard/Dashboard'
import LeagueView from '../LeagueView/LeagueView';
import TeamView from '../TeamView/TeamView';
import SideNav from '../SideMenu/SideNav';
import Header from '../../Header/Header';
import axios from 'axios';
import {connect} from 'react-redux';

export class LeagueManagerMainView extends React.Component {
    constructor(props){
        super(props);

        this.state={}
    }

    componentDidMount = async ()=> {
        await axios.get('/api/auth/me').then((users) => {
            
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
                    </Switch>
                </main>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.userReducer.user
    }
}

export default connect(mapStateToProps, {})(withRouter(LeagueManagerMainView));