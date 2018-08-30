import React from 'react'
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import Loading from '../../Loading/Loading'
import axios from 'axios';
import {loadLeagueInfo} from '../../../ducks/reducers/leagueReducer';

export class LeagueProfile extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            loading: true,
            editMode: false,
            league_id: '',
            btnText: 'Edit',
            league_name : '',
            league_city: '',
            league_state: '',
            league_zip: '',
            max_teams: '',
            number_games: '',
            min_players_per_team: '',
            max_players_per_team: '',
        }

        this.handleEditBtn = this.handleEditBtn.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    static getDerivedStateFromProps(props, state){
        if(props.selectedLeague){
            if(props.selectedLeague.league_id !== state.league_id){
                return {
                    loading: false,
                    league_id : props.selectedLeague.league_id,
                    league_name : props.selectedLeague.league_name,
                    league_city: props.selectedLeague.league_city,
                    league_state : props.selectedLeague.league_state,
                    league_zip : props.selectedLeague.league_zip,
                    max_teams : props.selectedLeague.max_teams,
                    number_games : props.selectedLeague.number_games,
                    min_players_per_team : props.selectedLeague.min_players_per_team,
                    max_players_per_team : props.selectedLeague.max_players_per_team
                }
            }
        }
    }

    handleEditBtn(e) {
        if(this.state.editMode === false) {
            this.setState({editMode: true,
                btnText:'Save'
            });
        } else if(this.state.editMode === true) {
            e.preventDefault();

            let updateLeagueInfo={
                league_id : this.state.league_id,
                league_name : this.state.league_name,
                league_city: this.state.league_city,
                league_state : this.state.league_state,
                league_zip : this.state.league_zip,
                max_teams : this.state.max_teams,
                number_games : this.state.number_games,
                min_players_per_team : this.state.min_players_per_team,
                max_players_per_team : this.setState.max_players_per_team
            }

            axios.put(`/api/leagues?userID=${this.props.user.user_id}`, updateLeagueInfo).then((result) => {
                
                this.props.loadLeagueInfo(this.props.user.user_id, this.state.league_id)
                this.setState({
                    loading: true,
                    btnText: "Edit",
                    editMode: false,
                    league_id: ''
                })
            }).catch((err) => {
                console(err);
            })
        }
    }

    handleInputChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit(e){
        e.preventDefault();

        let updateLeagueInfo={
            league_id : this.state.league_id,
            league_name : this.state.league_name,
            league_city: this.state.league_city,
            league_state : this.state.league_state,
            league_zip : this.state.league_zip,
            max_teams : this.state.max_teams,
            number_games : this.state.number_games,
            min_players_per_team : this.state.min_players_per_team,
            max_players_per_team : this.setState.max_players_per_team
        }

        console.log(updateLeagueInfo);

        axios.put(`/api/leagues?userID=${this.props.user.user_id}`, updateLeagueInfo).then((result) => {
            this.setState({loading: true})
            this.props.loadLeagueInfo(this.props.user.user_id, this.state.league_id)
            this.setState({league_id: ''})
        }).catch((err) => {
            console(err);
        })
    }

    render(){
        return (
            this.state.loading ? <Loading/> : (

            
            <div className='league-profile-container'>
                <form className='league-profile-form'>
                    <div className='league-profile-form-row'>
                        League Name: <input type='text'name='league_name' disabled={!this.state.editMode} value={this.state.league_name} onChange={(e)=>this.handleInputChange(e)} />
                    </div>
                    <div className='league-profile-form-row'>
                        City: <input type='text'name='league_city' disabled={!this.state.editMode} value={this.state.league_city} onChange={(e)=>this.handleInputChange(e)} />
                    </div>
                    <div className='league-profile-form-row'>
                        State: <input type='text' name='league_state' disabled={!this.state.editMode} value={this.state.league_state} onChange={(e)=>this.handleInputChange(e)} />
                    </div>
                    <div className='league-profile-form-row'>
                        Zipcode: <input name='league_zip' type='number' disabled={!this.state.editMode} value={this.state.league_zip} onChange={(e)=>this.handleInputChange(e)} />
                    </div>
                    <div className='league-profile-form-row'>
                        Max Number of Teams: <input type='number' name='max_teams' disabled={!this.state.editMode} value={this.state.max_teams} onChange={(e)=>this.handleInputChange(e)} />
                    </div>
                    <div className='league-profile-form-row'>
                        Number of Games Per Season: <input type='number' name='number_games' disabled={!this.state.editMode} value={this.state.number_games} onChange={(e)=>this.handleInputChange(e)} />
                    </div>
                    <div className='league-profile-form-row'>
                        Minimum Players Per Team: <input type='number' name='min_players_per_team' disabled={!this.state.editMode} value={this.state.min_players_per_team} onChange={(e)=>this.handleInputChange(e)} />
                    </div>
                    <div className='league-profile-form-row'>
                        Maximum Players Per Team: <input type='number' name='max_players_per_team' disabled={!this.state.editMode} value={this.state.max_players_per_team} onChange={(e)=>this.handleInputChange(e)} />
                    </div>
                </form>
                
                <button onClick={(e)=>this.handleEditBtn(e)} >{this.state.btnText}</button>
            </div>)
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.userReducer.user,
        managedLeagues: state.leagueReducer.managedLeagues,
        selectedLeague: state.leagueReducer.selectedLeague
    }
}

export default connect(mapStateToProps, {loadLeagueInfo})(withRouter(LeagueProfile));