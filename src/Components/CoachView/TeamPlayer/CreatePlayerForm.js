import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import genUtil from '../../../Utilities/generalUtil'

export class CreatePlayerForm extends React.Component{
    constructor(props){
        super(props);

        // TODO: Change to dynamic league id and team id
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
        this.resetState = this.resetState.bind(this);
    }

    handleInputChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

    // TODO: Change to dynamic league id and team id
    resetState(){
        this.setState({
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
        })
    }

    handleSubmitForm(e){
        e.preventDefault();

        const player={
            leagueID: this.state.leagueID,
            teamID: this.state.teamID,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            address: this.state.address,
            city: this.state.city,
            state: this.state.state,
            phone: this.state.phone,
            zip: this.state.zip,
            position: this.state.position,
            email: this.state.email,
            active: this.state.active
        }
        
        axios.post('/api/team/player', player).then(result=> {
            console.log(result);
            this.resetState();
        }).catch(err=> {
            console.log(err);
        })
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

function mapStateToProps(state){
    return {
        user: state.userReducer.user,
        managedTeams : state.teamReducer.managedTeams
    }
}

export default connect(mapStateToProps, {})(CreatePlayerForm)