import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import axios from 'axios';
import * as generalUtil from '../../Utilities/generalUtil';

export class AddSeasonForm extends React.Component{
    constructor(props){
        super(props);

        this.state={
            seasonStartDate: '',
            seasonEndDate: '',
            displayError: false
        }

        this.addNewSeason = this.addNewSeason.bind(this);
        this.handleInputSelect = this.handleInputSelect.bind(this);
        this.validateForm = this.validateForm.bind(this);
    }

    addNewSeason(e){
        e.preventDefault();
        let season={
            userID: this.props.user.user_id,
            leagueID: this.props.selectedLeague.league_id,
            seasonStartDate: this.state.seasonStartDate,
            seasonEndDate: this.state.seasonEndDate
        }

        if(this.validateForm()){
            axios.post('/api/league/season', season).then((result)=> {
                console.log(result);
                this.resetForm();
            }).catch((err)=> {
                console.log(`ERROR: ${err}`)
            })  
        } else {
            this.setState({displayError: true})
        }
              
    };

    handleInputSelect(e){
        this.setState({[e.target.name]: e.target.value})
    }

    validateForm(){
        if(generalUtil.validateTwoDates(this.state.seasonStartDate, this.state.seasonEndDate)){
            return true;
        } else {
            return false;
        }
    }

    resetForm(){
        this.setState({
            seasonStartDate: '',
            seasonEndDate: '',
            displayError: false
        })
    }

    render(){
        return(
            <div className='add-season-container'>
                <form className='add-season-form'>
                    <div className='add-season-form-row'>
                        Season Start Date: <input onChange={(e)=>this.handleInputSelect(e)} name='seasonStartDate' 
                        type="date" placeholder='Season Start Date'/>
                    </div>
                    <br/>
                    <div className='add-season-form-row'>
                        Season End Date: <input onChange={(e)=>this.handleInputSelect(e)} name='seasonEndDate' 
                        type="date" placeholder='Season End Date'/>
                    </div>
                    
                    <div className='add-season-form-row'>
                        <button onClick={(e)=>this.addNewSeason(e)} type="submit">Submit</button>
                    </div>                   
                </form>
                {
                    this.state.displayError ? (<div className='form-error-row'> 
                        Please Enter Correct Dates
                    </div>) : null
                }
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