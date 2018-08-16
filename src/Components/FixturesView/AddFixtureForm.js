import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import * as generalUtil from '../../Utilities/generalUtil'

export class AddFixtureForm extends React.Component{
    constructor(props){
        super(props)

        // awayTeam and homeTeam IDS
        this.state = {
            season: '',
            location:'',
            homeTeam: '',
            awayTeam: '',
            fixtureDate: ''
        }

        this.handleSelect = this.handleSelect.bind(this);
        this.handleSubmit= this.handleSubmit.bind(this);
    }

    handleSelect(e){
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit(e){
        e.preventDefault();
        let fixture = {
            fixture_date: this.state.fixtureDate,
            league_id : this.props.selectedLeague.league_id,
            season_id: this.state.season,
            location: this.state.location,
            home_team: this.state.homeTeam,
            away_team: this.state.awayTeam
        }

        
    }

    resetForm(){
        this.setState({
            season: '',
            location:'',
            homeTeam: '',
            awayTeam: '',
            fixtureDate: ''
        })
    }

    render(){
        let seasons=[];
        let locations=[];
        let teams = [];

        if(this.props.seasonsLeague){
            seasons = this.props.seasonsLeague.map((value, index)=> {
                return(
                    <option key={value.season_start_date + index} value={value.season_id}>
                        {generalUtil.truncateDate(value.season_start_date)} - {generalUtil.truncateDate(value.season_end_date)}
                    </option>
                )
            })
        }

        if(this.props.allStadiums) {
            locations = this.props.allStadiums.map((value, index) => {
                return(
                    <option key={value.stadium_id + index} value={value.stadium_id}>
                        {value.stadium_name}
                    </option>
                )
            })
        }

        if(this.props.teamsByLeague) {
            teams = this.props.teamsByLeague.map((value, index)=> {
                return (
                    <option key={value.team_id + index} value={value.team_id}>
                        {value.team_name}
                    </option>
                )
            })
        }

        return (
            <form className='add-fixture-form'>
                <div onChange={(e)=>this.handleSelect(e)} className='add-fixture-form-row'>
                    <input type='date' name='fixtureDate'/>
                    <br/>
                </div>
                <div className='add-fixture-form-row'>
                    <select name='season' onChange={(e)=> this.handleSelect(e)}>
                        <option value='Select Season'>
                            Select Season
                        </option>
                        {seasons}
                    </select>
                </div>
                <div className='add-fixture-form-row'>
                    <select name='location' onChange={(e)=> this.handleSelect(e)}>
                        <option value='Select Location'>
                            Select Location
                        </option>
                        {locations}
                    </select>
                </div>
                <div className='add-fixture-form-row'>
                    <select name='homeTeam' onChange={(e)=> this.handleSelect(e)}>
                        <option value='Home Team'>
                            Home Team
                        </option>
                        {teams}
                    </select>
                </div>
                <div className='add-fixture-form-row'>
                    <select name='awayTeam' onChange={(e)=> this.handleSelect(e)}>
                        <option value='Home Team'>
                            Away Team
                        </option>
                        {teams}
                    </select>
                </div>
                <div className='add-fixture-form-row'>
                    <input onClick={(e)=>this.handleSubmit(e)} type='submit' placeholder='Submit'/>
                </div>
                
            </form>
        )
    }
}   

function mapStateToProps(state){
    return {
        user: state.userReducer.user,
        selectedLeague: state.leagueReducer.selectedLeague,
        seasonsLeague: state.leagueReducer.seasonsLeague,
        allStadiums: state.stadiumReducer.allStadiums,
        teamsByLeague: state.teamReducer.teamsByLeague
    }
}

export default connect(mapStateToProps, {})(withRouter(AddFixtureForm));