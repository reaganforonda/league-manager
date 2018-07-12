import React from 'react';

export default class CoachTeamForm extends React.Component{
    constructor(props){
        super(props);

        this.state={
            leagueID: 1,
            teamName: '',
            city: '',
            state: '',
            zip: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleInputChange = this.handleSubmitForm.bind(this);
        this.resetState = this.resetState.bind(this);
    }

    handleInputChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmitForm(e){
        e.preventDefault();

        const team = {
            leagueID: this.state.leagueID,
            teamName: this.state.teamName,
            city: this.state.city,
            state: this.state.state,
            zip: this.state.zip
        }

    }

    resetState(){
        this.setState({
            leagueID: 1,
            teamName: '',
            city: '',
            state: '',
            zip: ''
        })
    }

    render(){
        return(
            <div className='coach-team-form-container'>
                <form className='coach-team-form'>
                    <input type='text' name='teamName' placeholder='Team Name' onChange={(e)=>this.handleInputChange(e)}/>
                    <input type='text' name='city' placeholder='City' onChange={(e)=>this.handleInputChange(e)}/>
                    <input type='text' name='state' placeholder='State' onChange={(e)=>this.handleInputChange(e)}/>
                    <input type='number' name='zip' placeholder='Zipcode' onChange={(e)=>this.handleInputChange(e)}/>
                    <input type='submit' placeholder='Create Team'/>
                </form>
            </div>
        )
    }
}