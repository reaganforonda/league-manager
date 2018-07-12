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
            <form className='coach-team-form'>
                <input name='teamName' placeholder='Team Name'/>
                <input name='city' placeholder='City'/>
                <input name='state' placeholder='State'/>
                <input name='zip' placeholder='Zipcode'/>
            </form>
        )
    }
}