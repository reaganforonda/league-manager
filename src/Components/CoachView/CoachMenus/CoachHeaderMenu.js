import React from 'react';


export default class CoachHeaderMenu extends React.Component{
    render(){
        return (
            <div className='coach-header-menu-container'>
                <h1>On The Bounce</h1>
                <div className='profile-section'>
                    <img className='profile-icon' src={require("../../../assets/images/icons8-user-filled-50.png")}/>
                </div>
            </div>
        )
    }
}