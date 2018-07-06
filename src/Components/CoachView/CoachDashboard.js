import React from 'react';
import Menu from './CoachMenus/CoachMenu'
import HeaderMenu from './CoachMenus/CoachHeaderMenu'
import {Switch, Route} from 'react-router-dom';

export default class CoachDashbaord extends React.Component{
    constructor(props) {
        super(props);

        this.state=[]
    }

    render(){
        return (
            <div className='dashboard-container'>
                <HeaderMenu/>
                <div>
                    <Menu/>
                    
                </div>
                
            </div>
        )
    }
}