import React from 'react';


export default class CreatePlayerForm extends React.Component{
    constructor(props){
        super(props);

        this.state={
            leagueID: 1,
            teamID: 1,
            firstName: '',
            lastName: '',
            address: '',
            city: '',
            state: '',
            phone: '',
            zip: '',
            position: '',
            email: '',
            active: true
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmitForm = this.handleSubmitForm.bind(this);
    }

    handleInputChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmitForm(e){
        e.preventDefault();
    }

    render(){
        return(
            <div className='player-creation-form-container'>
                <form className='player-creation-form'>
                    <input type='text' name='firstName' placeholder='First Name' 
                        onChange={(e)=>this.handleInputChange(e)}/>
                    <input type='text' name='lastName' placeholder='Last Name' 
                        onChange={(e) => this.handleInputChange(e)}/>
                    <input type='text' name='address' placeholder='Address' 
                        onChange={(e) => this.handleInputChange(e)}/>
                    <input type='text' name='city' placeholder="City" 
                        onChange={(e) => this.handleInputChange(e)}/>
                    <input type='text' name='state' placeholder='State'
                        onChange={(e) => this.handleInputChange(e)}/>
                    <input type='number' name='zip' placeholder='Zipcode' 
                        onChange={(e) => this.handleInputChange(e)}/>
                    <input type='text' name='phone' placeholder='Phone Number' 
                        onChange={(e) => this.handleInputChange(e)}/>
                    <input type='email' name='email' placeholder='Email' 
                        onChange={(e) => this.handleInputChange(e)}/>
                    <input type='text' name='Position' placeholder='Position'
                        onChange={(e) => this.handleInputChange(e)}/>
                    <input type='submit' placeholder='Add Player' onClick={(e)=>this.handleSubmitForm(e)}/>
                </form>
            </div>
        )
    }
}