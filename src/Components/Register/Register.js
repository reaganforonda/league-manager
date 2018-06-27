import React from 'react';


export default class Register extends React.Component{
    constructor(props){
        super(props);

        this.state={
            userType: '',
            userName: '',
            pw: '',
            confirmPW:''
        }

        this.handleUserTypeChange = this.handleUserTypeChange.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleUserTypeChange(e) {
        this.setState({userType: e.target.value})
    }

    handleInputChange(e){
        this.setState({[e.target.name]: e.target.value})
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
                            <lable htmlFor='team-mng'>Team Manager</lable>
                        </div>
                    </div>
                    {
                        this.state.userType === 'league-mng' ? (
                            <div className='registration-form-row'>
                                League Name
                            </div>
                        ): null
                    }
                    <div className='registration-form-row'>
                        <input onChange={(e) => this.handleInputChange(e)} name='userName' 
                            placeholder='User Name'/>
                    </div>
                    <div className='registration-form-row'>
                        <input onChange={(e) => this.handleInputChange(e)} name='pw'
                            placeholder='Password'/>
                    </div>
                    <div className='registration-form-row'>
                        <input onChange={(e)=> this.handleInputChange(e)} name='confirmPW' 
                            placeholder='Confirm Password'/>
                    </div>  
                </form>
            </div>
        )
    }
}