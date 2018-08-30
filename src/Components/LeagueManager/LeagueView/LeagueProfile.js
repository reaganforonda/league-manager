import React from 'react'
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import Loading from '../../Loading/Loading'

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
            this.setState({
                editMode: false,
                btnText: 'Edit'
            })
            
            this.handleSubmit(e);
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
    }

    render(){
        return (
            this.state.loading ? <Loading/> : (

            
            <div className='league-profile-container'>
                <form className='league-profile-form'>
                    <div className='league-profile-form-row'>
                        League Name: <input name='league_name' disabled={!this.state.editMode} value={this.state.league_name} onChange={(e)=>this.handleInputChange(e)} />
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
        selectedLeague: state.leagueReducer.selectedLeague
    }
}

export default connect(mapStateToProps, {})(withRouter(LeagueProfile));