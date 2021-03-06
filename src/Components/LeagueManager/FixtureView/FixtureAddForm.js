import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import StadiumDropDown from '../../DropdownMenus/StadiumDropDown';
import LeagueDropDown from '../../DropdownMenus/LeagueDropDown';
import TeamDropDown from '../../DropdownMenus/TeamDropDown';
import SeasonDropDown from '../../DropdownMenus/SeasonDropDown';
import {getFixtures} from '../../../ducks/reducers/fixtureReducer';
import axios from 'axios';

export class FixtureAddForm extends React.Component{
    constructor(props) {
        super(props);

        this.state={
            leagueID:'',
            stadiumID: '',
            fixtureDate: '',
            awayTeamID: '',
            homeTeamID: '',
            seasonID: '',
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.resetForm = this.resetForm.bind(this);
    }

    handleInputChange(e) {
        this.setState({[e.target.name] : e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();

        let fixture = {
            leagueID : this.state.leagueID,
            stadiumID : this.state.stadiumID,
            fixtureDate : this.state.fixtureDate,
            awayTeamID: this.state.awayTeamID,
            homeTeamID: this.state.homeTeamID,
            seasonID: this.state.seasonID
        }

        axios.post('/api/fixture', fixture).then((result) => {
            this.props.getFixtures(this.props.user.user_id);
            this.resetForm();
        }).catch((err) => {
            console.log(err);
        })
    }

    resetForm(){
        this.setState({
            leagueID:'',
            stadiumID: '',
            fixtureDate: '',
            awayTeamID: '',
            homeTeamID: '',
            seasonID:''
        })
    }

    render() {
        return (
            <div className='fixture-add-form-container'>
                <form className='fixture-add-form'>
                    <div className='fixture-add-form-row'>
                        League: <LeagueDropDown leagues={this.props.managedLeagues} selectLeague={this.handleInputChange} />
                    </div>
                    <div className='fixture-add-form-row'>
                        Season: <SeasonDropDown seasons={this.props.allSeasonsManager} selectSeason={this.handleInputChange} league={this.state.leagueID}/>
                    </div>
                    <div className='fixture-add-form-row'>
                        Location: <StadiumDropDown stadiums={this.props.allStadiums} selectStadium={this.handleInputChange}/> 
                    </div>
                    <div className='fixture-add-form-row'>
                        Date: <input type='datetime-local' name='fixtureDate' value={this.state.fixtureDate} onChange={(e)=>this.handleInputChange(e)}/>
                    </div>
                    <div className='fixture-add-form-row'>
                        Home Team: <TeamDropDown name={"homeTeamID"} teams={this.props.managedTeams} selectTeam={this.handleInputChange} league={this.state.leagueID}/>
                    </div>
                    <div className='fixture-add-form-row'>
                        Away Team: <TeamDropDown name={"awayTeamID"} teams={this.props.managedTeams} selectTeam={this.handleInputChange} league={this.state.leagueID}/>
                    </div>
                    <div className='fixture-add-form-row'>
                        <input type='submit' placeholder='Submit' onClick={(e)=> this.handleSubmit(e)}/>
                    </div>
                </form>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.userReducer.user,
        allStadiums: state.stadiumReducer.allStadiums,
        managedLeagues : state.leagueReducer.managedLeagues,
        managedTeams : state.teamReducer.managedTeams,
        allSeasonsManager: state.seasonReducer.allSeasonsManager
    }
}

export default connect(mapStateToProps, {getFixtures})(withRouter(FixtureAddForm));