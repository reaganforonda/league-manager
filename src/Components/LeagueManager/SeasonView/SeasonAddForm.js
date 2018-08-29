import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import * as genUtil from '../../../Utilities/generalUtil';
import LeagueDropDown from '../../DropdownMenus/LeagueDropDown'
import axios from 'axios';
import {getAllSeasonsLeagueManager} from '../../../ducks/reducers/seasonReducer';

export class SeasonAddForm extends React.Component{
    constructor(props) {
        super(props);

        this.state={
            today: '',
            seasonStartDate: '',
            seasonEndDate: '',
            leagueID: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.resetForm = this.resetForm.bind(this);
    }

    componentDidMount(){
        this.setState({today: genUtil.getCurrentDateFormated() })
    }

    handleInputChange(e) {
        this.setState({[e.target.name]:e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault();

        let season={
            league_id : this.state.leagueID,
            season_start_date: this.state.seasonStartDate,
            season_end_date: this.state.seasonEndDate
        }

        axios.post(`/api/season/${this.props.user.user_id}`, season).then((result) => {
            this.props.getAllSeasonsLeagueManager(this.props.user.user_id)
            this.resetForm();
        }).catch((err) => {
            console.log(err) //TODO:
        })
        
    }

    resetForm(){
        this.setState({
            today: genUtil.getCurrentDateFormated(),
            seasonStartDate: '',
            seasonEndDate: '',
            leagueID: ''
        })
    }

    render(){
        return (
            <div className='season-add-form-container'>
                <form className='season-add-form'>
                    <div className='season-add-form-row'>
                        Select League <LeagueDropDown selectLeague={this.handleInputChange} leagues={this.props.managedLeagues}/>
                    </div>
                    <div className='season-add-form-row'>
                        Season Start Date: <input name='seasonStartDate' type='date' min={this.state.today} placeholder='Season Start Date' 
                            value={this.state.seasonStartDate} onChange={(e)=>this.handleInputChange(e)}/>
                    </div>
                    <div className='season-add-form-row'>
                        Season End Date: <input name='seasonEndDate' type='date' placeholder='Season End Date' 
                            min={this.state.seasonStartDate} value={this.state.seasonEndDate} onChange={(e)=>this.handleInputChange(e)}/>
                    </div>
                    <div className='season-add-form-row'>
                        <input onClick={(e)=>this.handleSubmit(e)} type='submit' placeholder='Submit'/>
                    </div>
                </form>

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.userReducer.user,
        managedLeagues: state.leagueReducer.managedLeagues
    }
}

export default connect(mapStateToProps, {getAllSeasonsLeagueManager})(withRouter(SeasonAddForm));