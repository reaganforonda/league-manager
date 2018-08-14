import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import axios from 'axios';

export class AddSeasonForm extends React.Component{
    constructor(props){
        super(props);

        this.state={
            seasonStartDate: '',
            seasonEndDate: '',
        }

        this.addNewSeason = this.addNewSeason.bind(this);
    }

    addNewSeason(e){
        e.preventDefault();
        let season={
            leagueID: this.props.selectedLeague.league_id,
            seasonStartDate: this.state.seasonStartDate,
            seasonEndDate: this.state.seasonEndDate
        }
        axios.post('/api/league/season', season).then((result)=> {
            console.log("OKAYALKJDLKFJD")
            // TODO:
        }).catch((err)=> {
            console.log(`ERROR: ${err}`)
        })
    }

    render(){
        return(
            <form className='add-season-form'>
                <div className='add-season-form-row'>
                    <input type="date" placeholder='Season Start Date'/>
                </div>
                <div className='add-season-form-row'>
                    <input type="date" placeholder='Season End Date'/>
                </div>
                <div className='add-season-form-row'>
                    <input type="submit">Submit</input>
                </div>
            </form>
        )
    }
}

function mapStateToProps(state){
    return{
        user: state.userReducer.user,
        selectedLeague : state.leagueReducer.selectedLeague
    }
}

export default connect(mapStateToProps, {})(withRouter(AddSeasonForm))