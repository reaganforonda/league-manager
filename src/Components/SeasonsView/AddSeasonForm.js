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
        this.handleInputSelect = this.handleInputSelect.bind(this);
    }

    addNewSeason(e){
        e.preventDefault();
        let season={
            userID: this.props.user.user_id,
            leagueID: this.props.selectedLeague.league_id,
            seasonStartDate: this.state.seasonStartDate,
            seasonEndDate: this.state.seasonEndDate
        }

        axios.post('/api/league/season', season).then((result)=> {
            console.log(result);
            // TODO:
        }).catch((err)=> {
            console.log(`ERROR: ${err}`)
        })        
    };

    handleInputSelect(e){
        this.setState({[e.target.name]: e.target.value})
    }

    render(){
        return(
            <div className='add-season-container'>
                <form className='add-season-form'>
                    <div className='add-season-form-row'>
                        Season Start Date: <input onChange={(e)=>this.handleInputSelect(e)} name='seasonStartDate' type="date" placeholder='Season Start Date'/>
                    </div>
                    <br/>
                    <div className='add-season-form-row'>
                        Season End Date: <input onChange={(e)=>this.handleInputSelect(e)} name='seasonEndDate' type="date" placeholder='Season End Date'/>
                    </div>
                    
                    <div className='add-season-form-row'>
                        <button onClick={(e)=>this.addNewSeason(e)} type="submit">Submit</button>
                    </div>
                    
                </form>
            </div>
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