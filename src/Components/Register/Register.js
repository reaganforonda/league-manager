import React from 'react';
import {withRouter} from 'react-router-dom'
import { match } from 'minimatch';
import axios from 'axios';
import * as generalUtil from '../../Utilities/generalUtil';

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
    }

    handleUserTypeChange(e) {
        this.setState({userType: e.target.value})
    }

    handleInputChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

    matchingPassword(){
        return this.state.pw === this.state.confirmPW;
    }

    validForm(){
        let validUserType = this.state.userType !== '';
        let validUserName = this.state.userName !== '';
        let validEmail = generalUtil.validateEmail(this.state.userEmail);
        let matchingPW = this.matchingPassword();
        return validUserName && validUserType && validEmail;
    }

    handleRegisterRequest(user){
        axios.post('/api/auth/register', user).then((newUser) => {
            console.log(user);
        }).catch((err)=>{
            console.log(`Error: ${err.response.status}`)
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


    render(){
        return (
            <div className='registration-container'>
                <form className='registration-form container'>
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
                        <input onChange={(e) => this.handleInputChange(e)} name='userName' 
                            required type='text' placeholder='User Name'/>
                    </div>
                    <div className='registration-form-row'>
                        <input onChange={(e) => this.handleInputChange(e)} name='userEmail' 
                            required type='email' placeholder='Email'/>
                    </div>
                    <div className='registration-form-row'>
                        <input onChange={(e) => this.handleInputChange(e)} name='pw'
                            type='password' required placeholder='Password'/>
                    </div>
                    <div className='registration-form-row'>
                        <input onChange={(e)=> this.handleInputChange(e)} name='confirmPW' 
                            type='password' required placeholder='Confirm Password'/>
                    </div>
                    <div className='registration-form-row'>
                        <input onClick={(e)=>this.handleSubmitForm(e)} type='submit' placeholder='Register'/>
                    </div>
                </form>
            </div>
        )
    }
}

export default withRouter(Register);