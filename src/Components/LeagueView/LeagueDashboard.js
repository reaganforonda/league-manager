import React from 'react';
import {withRouter} from 'react-router-dom';
import Header from './LeagueHeader'
import LeagueSideMenu from './LeageMenus/LeagueSideMenu'

export class LeagueDashboard extends React.Component{
    render(){
        return (
            <div className='league-dashboard-container'>
                <Header/>
                <LeagueSideMenu/>
            </div>
        )
    }
}

export default withRouter(LeagueDashboard);