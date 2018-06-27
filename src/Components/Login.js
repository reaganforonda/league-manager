import React from 'react';


export default class Login extends React.Component{
    constructor(props){
        super(props);

        this.state={
            userName:'',
            pw:''
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handelLoginSubmit = this.handelLoginSubmit.bind(this);
    }

    handleInputChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

    handelLoginSubmit(e){
        e.preventDefault();
        
        if(this.state.userName !== '' && this.state.pw !== ''){

        }
    }

    render(){
        return (
            <div className='login-page-container'>
                <div className='login-container'>
                    <h2>Welcome to League Manager</h2>
                    <div className='row-error-message'></div>
                    <form className='login-form'>
                        <div className='login-form-input-row'>
                            <input onChange={(e)=> this.handleInputChange(e)} 
                                name='userName' type='text' required placeholder='User Name'/>
                        </div>
                        <div className='login-form-input-row'>
                            <input onChange={(e)=> this.handleInputChange(e)} 
                                name='pw' type='password' required placeholder='Password'/>
                        </div>
                        <div className='login-form-input-row'>
                            <input className='login-submit-btn' type='submit' placeholder='Sign In'/>
                        </div>
                    </form>
                    <p>Don't have an account? Please Register</p>
                </div>
            </div>
        )
    }
}