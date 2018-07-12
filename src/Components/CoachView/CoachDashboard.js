import React from 'react';
import Menu from './CoachMenus/CoachMenu'
import HeaderMenu from './CoachMenus/CoachHeaderMenu';
import {Switch, Route} from 'react-router-dom';
import SquadView from './Squad/SquadView';
import TeamView from './TeamView/CoachTeamView'

export default class CoachDashbaord extends React.Component{
    constructor(props) {
        super(props);

        this.state={}
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