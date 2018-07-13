import React from 'react';
import Menu from './CoachMenus/CoachMenu'
import HeaderMenu from './CoachMenus/CoachHeaderMenu';
import {Switch, Route} from 'react-router-dom';
import SquadView from './Squad/SquadView';
import TeamView from './TeamView/CoachTeamView';
import axios from 'axios'
import { connect } from 'react-redux';

export class CoachDashbaord extends React.Component{
    constructor(props) {
        super(props);

        this.state={}
    }

    componentDidMount = async()=>{
        await axios.get('/api/auth/me').then((user)=> {
            if(typeof user.data.acct_type === 2){
                console.log("Login Successful");
            }
        }).catch(err=> {
            console.log(err);
            this.props.history.push('/login')
        })
    }

    render(){
        return (
            <div className='dashboard-container'>
                <HeaderMenu/>
                <div className='dashboard-main-section'>
                    <Menu/>
                    <Switch>
                        <Route path='/coach/dashboard/squadview' component={SquadView}/>
                        <Route path='/coach/dashboard/teamview' component={TeamView}/>
                    </Switch>
                </div>
                
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        user: state.userReducer.user
    }
}

export default connect(mapStateToProps, {})(CoachDashbaord)