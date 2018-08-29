import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';
import * as genUtil from '../../../Utilities/generalUtil';
import LeagueDropDown from '../../DropdownMenus/LeagueDropDown';
import {getManagedTeams} from '../../../ducks/reducers/teamReducer';

export class TeamAddForm extends React.Component{
    constructor(props) {
        super(props);

        this.state={
            leagueID: '',
            teamName: '',
            teamCity: '',
            teamState: '',
            teamZip: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.resetForm = this.resetForm.bind(this);
    }

    handleInputChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    submitForm(e){
        e.preventDefault();

        let team = {
            leagueManager: this.props.user.user_id,
            leagueID: this.state.leagueID,
            teamName: this.state.teamName,
            teamCity: this.state.teamCity,
            teamState: this.state.teamState,
            teamZip: this.state.teamZip
        }

        console.log(team);

        if(this.validForm()) { 
            axios.post('/api/team', team).then((result) => {
                this.resetForm();
                this.props.getManagedTeams(this.props.user.user_id);
            }).catch((err) => {
                console.log(err) //TODO:
            })
        }
    }

    resetForm(){
        this.setState({
            teamName: '',
            teamCity: '',
            teamState: '',
            teamZip: '',
            leagueID: ''
        })
    }

    validForm(){
        
        let validName = genUtil.validateLeagueName(this.state.teamName);
        let validCity = genUtil.validateCity(this.state.teamCity);
        let validState = genUtil.validateState(this.state.teamState);
        let validZip = genUtil.validateZipCode(this.state.teamZip);

        if(validName && validCity && validState && validZip && this.state.leagueID !== '') {
            return true;
        } else {
            return false;
        }
    }

    render(){
        return (
            <div className='league-team-add-form-container'>
                <form className='league-team-add-form'>
                <div className='league-team-add-form-row'>
                        <LeagueDropDown selectLeague={this.handleInputChange} leagues={this.props.managedLeagues}/>
                    </div>
                    <div className='league-team-add-form-row'>
                        Team Name: <input name='teamName' type='text' value={this.state.teamName} 
                            onChange={(e) => this.handleInputChange(e)}/>
                    </div>
                    <div className='league-team-add-form-row'>
                        City: <input name='teamCity' type='text' value = {this.state.teamCity} 
                            onChange={(e) => this.handleInputChange(e)}/>
                    </div>
                    <div className='league-team-add-form-row'>
                        State: <input name='teamState' type='text' value={this.state.teamState} 
                            onChange={(e) => this.handleInputChange(e)}/>
                    </div>
                    <div className='league-team-add-form-row'>
                        Zipcode: <input name='teamZip' type='number' value={this.state.teamZip} 
                            onChange={(e) => this.handleInputChange(e)}/>
                    </div>
                </form>
                <button onClick={(e)=>this.submitForm(e)}>Submit</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.userReducer.user,
        managedLeagues: state.leagueReducer.managedLeagues,
        managedTeams: state.teamReducer.managedTeams
    }
}

export default connect(mapStateToProps, {getManagedTeams})(withRouter(TeamAddForm))