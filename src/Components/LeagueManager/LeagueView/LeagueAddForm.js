import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';
import * as utilFunctions from '../../../Utilities/generalUtil';

export class LeagueAddForm extends React.Component{
    constructor(props){
        super(props);

        this.state={
            leagueName: '',
            leagueCity: '',
            leagueState: '',
            leagueZip: '',
            maxTeams: '',
            numberGames: '',
            minPlayersPerTeam: '',
            maxPlayersPerTeam: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.resetForm = this.resetForm.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.validForm = this.validForm.bind(this);
    };

    handleInputChange(e){
        this.setState({[e.target.name] : e.target.value});
        this.enableSubmitButton();
    ;}

    resetForm(){
        this.setState({
            leagueName: '',
            leagueCity: '',
            leagueState: '',
            leagueZip: '',
            maxTeams: '',
            numberGames: '',
            minPlayersPerTeam: '',
            maxPlayersPerTeam: ''
        })
    };

    submitForm(e){
        e.preventDefault();

        let league = {
            leagueName: this.state.leagueName,
            leagueCity: this.state.leagueCity,
            leagueState: this.state.leagueState,
            leagueZip: this.state.leagueZip,
            maxTeams: this.state.maxTeams,
            numberGames: this.state.numberGames,
            minPlayersPerTeam: this.state.minPlayersPerTeam,
            maxPlayersPerTeam: this.state.maxPlayersPerTeam,
            // league_manager: this.props.user.user_id 
            league_manager: 2 //TODO: switch to actual person logged in
        }

        if(this.validForm()){
            axios.post('/api/register/league', league).then((result) => {
                
            }).catch((err) => {
                console.log(err) //TODO:
            })
        } else {
            // TODO: 
        }
    };

    validForm(){
        let validName = utilFunctions.validateLeagueName(this.state.leagueName);
        let validCity = utilFunctions.validateCity(this.state.leagueCity);
        let validState = utilFunctions.validateState(this.state.leagueState);
        let validZip = utilFunctions.validateZipCode(this.state.leagueZip);

        if(validName && validCity && validState && validZip && this.state.maxTeams && 
            this.state.numberGames && this.minPlayersPerTeam && this.state.maxPlayersPerTeam) {
                return true;
            } else {
                return false;
            }
    }

    render(){
        return (
            <div className='league-add-form-container'>
                <form className='league-add-form'>
                    <div className='league-add-form-row'>
                        League Name: <input type='text' name='leagueName' value={this.state.leagueName} 
                            onChange={(e)=> this.handleInputChange(e)}/>
                    </div>
                    <div className='league-add-form-row'>
                        City : <input type='text' name='leagueCity' value={this.state.leagueCity} 
                            onChange={(e)=> this.handleInputChange(e)}/>
                    </div>
                    <div className='league-add-form-row'>
                        State: <input type='text' name='leagueState' value={this.state.leagueState} 
                            onChange={(e)=> this.handleInputChange(e)}/>
                    </div>
                    <div className='league-add-form-row'>
                        Zip: <input type='number' name='leagueZip' value={this.state.leagueZip} 
                            onChange={(e)=> this.handleInputChange(e)}/>
                    </div>
                    <div className='league-add-form-row'>
                        Number of Teams: <input type='number' name='maxTeams' value={this.state.maxTeams} 
                            onChange={(e)=> this.handleInputChange(e)}/>
                    </div>
                    <div className='league-add-form-row'>
                        Number of Games Per Season: <input type='number' name='numberGames' value={this.state.numberGames} 
                            onChange={(e)=> this.handleInputChange(e)}/>
                    </div>
                    <div className='league-add-form-row'>
                        Minimum Number of Players Per Team: <input type='number' name='minPlayersPerTeam' value={this.state.minPlayersPerTeam} 
                            onChange={(e)=> this.handleInputChange(e)}/>
                    </div>
                    <div className='league-add-form-row'>
                        Max Number of Players Per Team: <input type='number' name='maxPlayersPerTeam' value={this.state.maxPlayersPerTeam} 
                            onChange={(e)=> this.handleInputChange(e)}/>
                    </div>
                </form>
                <button onClick={(e)=>this.submitForm(e)}>SUBMIT</button>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        user: state.userReducer.user
    }
}

export default connect(mapStateToProps, {})(withRouter(LeagueAddForm));