import React from 'react'
import {withRouter, Switch, Route} from 'react-router-dom';
import Header from '../LeagueHeader'
import LeagueSideMenu from '../LeagueManagerMenus/LeagueSideMenu'
import axios from 'axios';

import LeagueTeamView from './LeagueTeamView';
import LeagueListView from '../LeagueListView/LeagueListView';
import LeagueAdminView from '../LeagueAdminView/LeagueAdminView';
import StadiumView from '../../StadiumView/StadiumView';

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
                <main className='league-dashboard-main-section'>
                    <LeagueSideMenu/>
                    <Switch>
                        <Route path='/league/dashboard/teamview' component={LeagueTeamView}/>
                        <Route path='/league/dashboard/leaguelistview' component={LeagueListView}/>
                        <Route path='/league/dashboard/leagueadmin/' component={LeagueAdminView}/>
                        <Route path='/league/dashboard/locations' component={StadiumView}/>
                    </Switch>
                </main>
            </div>
        )
    }
}

export default withRouter(LeagueDashboard);