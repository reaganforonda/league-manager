import React from 'react';


export default class Register extends React.Component{
    constructor(props){
        super(props);

        this.state={}
    }

    render(){
        return (
            <div className='registration-container'>
                <div className='registration-form container'>
                    <div className='registration-form-row'>
                        <h1>Join On The Bounce </h1>
                    </div>
                    <div className='registration-form-row'>
                        <h2>User Type</h2>
                        <input type='radio'/>League Manager
                        <input type='radio'/>Team Manager
                    </div>
                    <div className='registration-form-row'>
                        <input placeholder='User Name'/>
                    </div>
                    <div className='registration-form-row'>
                        <input placeholder='Password'/>
                    </div>
                    <div className='registration-form-row'>
                        <input placeholder='Confirm Password'/>
                    </div>
                    
                </div>
            </div>
        )
    }
}