import React from 'react';
import Menu from './CoachMenu'

export default class CoachDashbaord extends React.Component{
    constructor(props) {
        super(props);

        this.state=[]
    }

    render(){
        return (
            <div className='dashboard-container'>
                <Menu/>
            </div>
        )
    }
}