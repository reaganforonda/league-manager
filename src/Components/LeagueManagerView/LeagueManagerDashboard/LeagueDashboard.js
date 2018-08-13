import React from 'react'
import {withRouter, Switch, Route} from 'react-router-dom';
import Header from './LeagueHeader'
import LeagueSideMenu from './LeageMenus/LeagueSideMenu'
import axios from 'axios';

import LeagueTeamView from './LeagueTeams/LeagueTeamView';
import LeagueListView from './LeagueListView/LeagueListView';

export class LeagueDashboard extends React.Component{

    componentDidMount = async()=> {
        await axios.get('/api/auth/me').then((user)=> {
            if(typeof user.data.acct_type === 1){
                console.log("Login Successful");
            }
        }).catch(err=> {
            console.log(err);
            this.props.history.push('/login')
        })
    }   

    render(){
        return (
            <div className='league-dashboard-container'>
                <Header/>
                <div className='league-dashboard-main-section'>
                    <LeagueSideMenu/>
                    <Switch>
                        <Route path='/league/dashboard/teamview' component={LeagueTeamView}/>
                        <Route path='/league/dashboard/leaguelistview' component={LeagueListView}/>
                    </Switch>
                </div>
            </div>
        )
    }
}

export default withRouter(LeagueDashboard);