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
    }

    render(){
        return (
            <div className='login-page-container'>
                <div className='login-container'>
                    <h2>Welcome to League Manager</h2>
                    <div className='row-error-message'></div>
                    <form className='login-form'>
                        <input onChange={(e)=> this.handleInputChange(e)} 
                            name='userName' placeholder='User Name'/>
                        <input onChange={(e)=> this.handleInputChange(e)} 
                            name='pw' type='password' placeholder='Password'/>
                        <input type='submit' placeholder='Sign In'/>
                    </form>
                </div>
            </div>
        )
    }
}