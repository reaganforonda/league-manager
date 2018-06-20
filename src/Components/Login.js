import React from 'react';


export default class Login extends React.Component{
    render(){
        return (
            <div className='login-page-container'>
                <div className='login-container'>
                    <h2>Welcome to League Manager</h2>
                    <div className='row-error-message'></div>
                    <input placeholder='User Name'/>
                    <input placeholder='Password'/>
                    <button>Sign In</button>
                </div>
            </div>
        )
    }
}