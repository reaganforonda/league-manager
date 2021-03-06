import React from 'react';
import {withRouter} from 'react-router-dom'
import axios from 'axios';
import * as generalUtil from '../../Utilities/generalUtil';
import {connect} from 'react-redux';
import {setActiveUser} from '../../ducks/reducers/userReducer'

export class Register extends React.Component{
    constructor(props){
        super(props);

        this.state={
            userType: '',
            userName: '',
            userEmail:'',
            pw: '',
            confirmPW:''
        }

        this.handleUserTypeChange = this.handleUserTypeChange.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmitForm = this.handleSubmitForm.bind(this);
        this.matchingPassword = this.matchingPassword.bind(this);
        this.handleRegisterRequest = this.handleRegisterRequest.bind(this);
        this.validForm = this.validForm.bind(this);
        this.registerRedirect = this.registerRedirect.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleUserTypeChange(e) {
        this.setState({userType: e.target.value})
    }

    handleInputChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

    matchingPassword(){
        return (this.state.pw === this.state.confirmPW) && (this.state.pw.length === this.state.confirmPW.length);
    }

    validForm(){
        let validUserType = this.state.userType !== '' && (this.state.userType === 'league' || this.state.userType==='team');
        let validUserName = this.state.userName !== '' && (this.state.userEmail.length <= 45);
        let validEmail = generalUtil.validateEmail(this.state.userEmail);
        let matchingPW = this.matchingPassword();
        return validUserName && validUserType && validEmail && matchingPW;
    }

    handleRegisterRequest(user){
        axios.post('/api/auth/register', user).then((newUser) => {
            this.handleLogin(user);
        }).catch((err)=>{
            console.log(`Error: ${err.response.status}`)
            if(err.response.status === 500){
                this.props.history.push('/error/500')
            } else if (err.response.status === 401){
                this.props.history.push('/error/401');
            }
        })
    }

    handleSubmitForm(e){
        e.preventDefault();
        
        let acct_type ='';
        
        if(this.state.userType==='league'){
            acct_type = 1;
        } else if(this.state.userType === 'team'){
            acct_type = 2;
        }

        const user = {
            userType: acct_type,
            userName: this.state.userName,
            userEmail: this.state.userEmail,
            pw: this.state.confirmPW
        }

        if(this.validForm()){
            this.handleRegisterRequest(user);
        }
    }

    registerRedirect(userType, status){
        if(userType === 1 && status === 200){
            this.props.history.push('/leaguemanager/dashboard')
        }else if (userType === 2 && status === 200){
            this.props.history.push('/coach/dashboard')
        }
    }

    handleLogin(user){
        let newUser = {
            userName: user.userName,
            pw : user.pw
        }

        axios.post('/api/auth/login',newUser).then((res) => {
            this.props.setActiveUser(res.data);
            this.registerRedirect(~~user.userType, ~~res.status)
        }).catch((err) => {
            console.log(err);
            if(err.response.status===422){
                console.log(err);
            } else if( err.response.status===500){
                this.props.history.poush('/error/500')
            }
        })
    }

    render(){
        return (
            <div className='registration-container'>
                <form className='registration-form-container'>
                    <div className='registration-form-row'>
                        <h1>Join On The Bounce </h1>
                    </div>
                    <div className='registration-form-row'>
                        <h2>User Type</h2>
                        <div className='radio-row'>
                            <input id='league-mng' checked={this.state.userType === 'league'} 
                                onChange={(e)=> this.handleUserTypeChange(e)} value='league' type='radio'/>
                            <label htmlFor='league-mng'>League Manager</label>
                        </div>
                        <div className='radio-row'>
                            <input id='team-mng' checked={this.state.userType==='team'} 
                                onChange={(e)=> this.handleUserTypeChange(e)} value='team' type='radio'/>
                            <label htmlFor='team-mng'>Team Manager</label>
                        </div>
                    </div>

                    <div className='registration-form-row'>
                        <input className='registration-form-row-ipnut' onChange={(e) => this.handleInputChange(e)} name='userName' 
                            maxLength='45' required type='text' placeholder='User Name'/>
                    </div>
                    <div className='registration-form-row'>
                        <input className='registration-form-row-ipnut' onChange={(e) => this.handleInputChange(e)} name='userEmail' 
                            maxLength='255' required type='email' placeholder='Email'/>
                    </div>
                    <div className='registration-form-row'>
                        <input className='registration-form-row-ipnut' onChange={(e) => this.handleInputChange(e)} name='pw'
                            maxLength='20' type='password' required placeholder='Password'/>
                    </div>
                    <div className='registration-form-row'>
                        <input className='registration-form-row-ipnut' onChange={(e)=> this.handleInputChange(e)} name='confirmPW' 
                            maxLength='20' type='password' required placeholder='Confirm Password'/>
                    </div>
                    <div className='registration-form-row'>
                        <input className='registration-submit-btn' onClick={(e)=>this.handleSubmitForm(e)} type='submit' placeholder='Register'/>
                    </div>
                </form>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {

    }
}

export default connect(mapStateToProps, {setActiveUser})( withRouter(Register));