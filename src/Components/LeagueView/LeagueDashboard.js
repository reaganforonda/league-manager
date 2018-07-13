import React from 'react';
import {withRouter} from 'react-router-dom';
import Header from './LeagueHeader'
import LeagueSideMenu from './LeageMenus/LeagueSideMenu'
import axios from 'axios';

export class LeagueDashboard extends React.Component{

    componentDidMount = async()=> {
        await axios.get('/api/auth/me').then((user)=> {
            if(typeof user.data.acct_type === 1){
                console.log(user);
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
                <LeagueSideMenu/>
            </div>
        )
    }
}

export default withRouter(LeagueDashboard);