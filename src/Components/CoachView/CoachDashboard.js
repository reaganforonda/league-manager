import React from 'react';
import Menu from './CoachMenus/CoachMenu'
import HeaderMenu from './CoachMenus/CoachHeaderMenu'

export default class CoachDashbaord extends React.Component{
    constructor(props) {
        super(props);

        this.state=[]
    }

    render(){
        return (
            <div className='dashboard-container'>
                <HeaderMenu/>
                <Menu/>
            </div>
        )
    }
}