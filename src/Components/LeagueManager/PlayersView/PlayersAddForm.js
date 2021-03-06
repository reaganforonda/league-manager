import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import LeagueDropDown from '../../DropdownMenus/LeagueDropDown';
import TeamDropDown from '../../DropdownMenus/TeamDropDown';
import {getAllPlayersLM} from '../../../ducks/reducers/playersReducer';
import axios from 'axios';

export class PlayersAddForm extends React.Component{
    constructor(props) {
        super(props);

        this.state={
            leagueID: '',
            teamID: '',
            firstName: '',
            lastName: '',
            address: '',
            city: '',
            state: '',
            phone: '',
            zip: '',
            email: '',
            birthday: '',
            active: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCheckBoxChange = this.handleCheckBoxChange.bind(this);
        this.resetForm = this.resetForm.bind(this);
    }

    handleInputChange(e) {
        this.setState({[e.target.name] : e.target.value});
    }

    handleCheckBoxChange(e) {
        this.setState({[e.target.name] : e.target.checked})
    }

    handleSubmit(e){
        e.preventDefault();

        let player = {
            leagueID : this.state.leagueID,
            teamID: this.state.teamID,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            address: this.state.address,
            city: this.state.city,
            state: this.state.state,
            phone: this.state.phone,
            zip: this.state.zip,
            email: this.state.email,
            active: this.state.active,
            birthday: this.state.birthday
        }

        console.log(player);

        axios.post('/api/player', player).then((result) => {
            this.props.getAllPlayersLM(this.props.user.user_id);
            this.resetForm();
        }).catch((err) => {
            console.log(err)
        })
    }

    resetForm(){
        this.setState({
            leagueID: '',
            teamID: '',
            firstName: '',
            lastName: '',
            address: '',
            city: '',
            state: '',
            zip: '',
            email: '',
            birthday:'',
            active: ''
        })
    }

    render(){
        return (
            <div className='players-add-form-container'>
                <form className='players-add-form'>
                    <div className='players-add-form-row'>
                        League <LeagueDropDown selectLeague={this.handleInputChange} leagues={this.props.managedLeagues}/>
                    </div>
                    <div className='players-add-form-row'>
                        Team <TeamDropDown name={'teamID'} selectTeam={this.handleInputChange} league={this.state.leagueID} teams={this.props.managedTeams}/>
                    </div>
                    <div className='players-add-form-row'>
                        First Name <input type='text' maxLength='45' name='firstName' value={this.state.firstName} 
                            onChange={(e)=>this.handleInputChange(e)} />
                    </div>
                    <div className='players-add-form-row'>
                        Last Name <input type='text' maxLength='45' name='lastName' value={this.state.lastName} 
                            onChange={(e)=>this.handleInputChange(e)} />
                    </div>
                    <div className='players-add-form-row'>
                        Birthday <input type='date' name='birthday' value={this.state.birthday} 
                            onChange={(e)=>this.handleInputChange(e)} />
                    </div>
                    <div className='players-add-form-row'>
                        Address <input type='text' name='address' value={this.state.address} 
                            onChange={(e)=>this.handleInputChange(e)} />
                    </div>
                    <div className='players-add-form-row'>
                        City <input type='text' name='city' value={this.state.city} 
                            onChange={(e)=>this.handleInputChange(e)} />
                    </div>
                    <div className='players-add-form-row'>
                        State <input type='text' name='state' value={this.state.state} 
                            onChange={(e)=>this.handleInputChange(e)} />
                    </div>
                    <div className='players-add-form-row'>
                        Zip <input type='number' name='zip' value={this.state.zip} 
                            onChange={(e)=>this.handleInputChange(e)} />
                    </div>
                    <div className='players-add-form-row'>
                        Phone <input type='text' name='phone' value={this.state.phone} 
                            onChange={(e)=>this.handleInputChange(e)} />
                    </div>
                    <div className='players-add-form-row'>
                        Email <input type='email' name='email' value={this.state.email} 
                            onChange={(e)=>this.handleInputChange(e)} />
                    </div>
                    <div className='players-add-form-row'>
                        Active <input type='checkbox' name='active' checked={this.state.active} 
                            onChange={(e)=>this.handleCheckBoxChange(e)} />
                    </div>
                    <div className='players-add-form-row'>
                        <input onClick={(e) =>this.handleSubmit(e)} type='submit' placeholder='Submit'/>
                    </div>
                </form>

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.userReducer.user,
        managedLeagues: state.leagueReducer.managedLeagues,
        managedTeams: state.teamReducer.managedTeams,
        allPlayersLeagueManager: state.playerReducer.allPlayersLeagueManager
    }
}

export default connect(mapStateToProps, {getAllPlayersLM})(withRouter(PlayersAddForm));