import React from 'react'
import {withRouter} from 'react-router-dom'
import axios from 'axios';
import {connect} from 'react-redux';

export class RegisterLeague extends React.Component{
    constructor(props){
        super(props);

        this.state={
            leagueName: '',
            leagueCity: '',
            leagueState: '',
            leagueZip: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.resetState = this.resetState.bind(this);
        this.redirectToDashboard = this.redirectToDashboard.bind(this);
        this.handleSubmitForm = this.handleSubmitForm.bind(this);
    }

    handleInputChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

    resetState(){
        this.setState({
            leagueName: '',
            leagueCity: '',
            leagueState: '',
            leagueZip: ''
        })
    }

    redirectToDashboard(){
        this.props.history.push('/league/dashboard')
    }

    handleSubmitForm(e){
        e.preventDefault();

        let league = {
            user_id: 1, // TODO:  Change to dynamic User_ID using react redux
            // user_id: this.props.user.user_id
            leagueName: this.state.leagueName,
            leagueCity: this.state.leagueCity,
            leagueState: this.state.leagueState,
            leagueZip: this.state.leagueZip
        }
        
        axios.post('/api/register/league', league).then((league) => {
            console.log('League Created');
            this.redirectToDashboard();
        }).catch((err) => {
            console.log(`Error In Creating League: ${err}`)
        })
    }

    render(){
        return (
            <div className='register-league-info-container'> 
                <h1>Create A League</h1>
                <form className='league-info-form'>
                    <div className='create-league-row'>
                        <input required type='text' maxLength='45' name='leagueName' 
                            onChange={(e)=>this.handleInputChange(e)} placeholder='League Name'/>
                    </div>
                    <div className='create-league-row'>
                        <input required type='text' name='leagueCity' 
                            onChange={(e)=>this.handleInputChange(e)} placeholder='City'/>
                    </div>
                    <div className='create-league-row'>
                        <input required type='text' name='leagueState' 
                            onChange={(e)=>this.handleInputChange(e)} placeholder='State'/>
                    </div>
                    <div className='create-league-row'>
                        <input required type='number' name='leagueZip' 
                            onChange={(e)=>this.handleInputChange(e)} placeholder='Zipcode'/>
                    </div>
                    <div className='create-league-row'>
                        <input onClick={(e)=>this.handleSubmitForm(e)} type='submit' placeholder='Submit'/>
                    </div>
                </form>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        user: state.userReducer.user
    }
}

export default connect(mapStateToProps, {})(withRouter(RegisterLeague))