import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import * as generalUtil from '../../Utilities/generalUtil'

export class AddFixtureForm extends React.Component{
    constructor(props){
        super(props)

        this.state = {}
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
                <div className='add-fixture-form-row'>
                    
                </div>
                
                <div className='add-fixture-form-row'>
                    <select>
                        <option value='Select Season'>
                            Select Season
                        </option>
                        {seasons}
                    </select>
                </div>
                <div className='add-fixture-form-row'>
                    <select>
                        <option value='Select Location'>
                            Select Location
                        </option>
                        {locations}
                    </select>
                </div>
                <div className='add-fixture-form-row'>
                    <select>
                        <option value='Home Team'>
                            Home Teams
                        </option>
                        {teams}
                    </select>
                </div>
                <div className='add-fixture-form-row'>
                    <select>
                        <option value='Home Team'>
                            Away Team
                        </option>
                        {teams}
                    </select>
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