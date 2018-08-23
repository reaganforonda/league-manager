import React from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {setActiveUser} from '../../ducks/reducers/userReducer'

export class Login extends React.Component{
    constructor(props){
        super(props);

        this.state={
            userName:'',
            pw:'',
            displayError: false
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handelLoginSubmit = this.handelLoginSubmit.bind(this);
        this.resetState = this.resetState.bind(this);
        this.redirectToRegister = this.redirectToRegister.bind(this);
    }

    handleInputChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

    handelLoginSubmit(e){
        e.preventDefault();
        
        if(this.state.userName !== '' && this.state.pw !== ''){
            let user={
                userName: this.state.userName,
                pw: this.state.pw
            }
            
            axios.post('/api/auth/login', user).then((res)=> {
                if(res.data.acct_type){
                    if(res.data.acct_type === 1){
                        this.props.setActiveUser(res.data);
                        this.props.history.push('/league/dashboard')
                    } else if(res.data.acct_type === 2) {
                        this.props.setActiveUser(res.data);
                        this.props.history.push('/coach/dashboard')
                    }
                    this.resetState();
                }
            }).catch((err) => {
                console.log(err);
                if(err.response.status === 422){
                    this.setState({displayError: true})
                } else if (err.response.status === 500){
                    this.props.history.push('/error/500');
                    //TODO: How to prevent anyone to access this page?
                }
            })
        }
    }

    resetState(){
        this.setState({
            userName:'',
            pw:'',
            displayError: false
        })
    }

    redirectToRegister(e){
        e.preventDefault();
        this.props.history.push('/register');
    }

    render(){
        return (
            <div className='login-page-container'>
                <div className='login-container'>
                    <h2>Welcome To On The Bounce</h2>
                    {
                        this.state.displayError ? (<div className='row-error-message'>Incorrect User Name or Password</div>) : null
                    }
                    
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
                            <input onClick={(e)=> this.handelLoginSubmit(e)} className='login-submit-btn' type='submit' placeholder='Sign In'/>
                        </div>
                    </form>
                    <p>Don't have an account? <span onClick={(e)=>this.redirectToRegister(e)}>Please Register</span></p>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        user: state.userReducer.user
    }
}

export default connect(mapStateToProps, {setActiveUser})(withRouter(Login));