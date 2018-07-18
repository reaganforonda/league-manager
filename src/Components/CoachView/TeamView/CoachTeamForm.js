import React from 'react';
import {connect} from 'react-redux';
import {getAllLeagues} from '../../../ducks/reducers/leagueReducer';
import axios from 'axios';
import {getManagedTeams} from '../../../ducks/reducers/teamReducer';

export class CoachTeamForm extends React.Component{
    constructor(props){
        super(props);

        this.state={
            leagueID: '',
            teamName: '',
            city: '',
            state: '',
            zip: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmitForm = this.handleSubmitForm.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.resetState = this.resetState.bind(this);
    }

    componentDidMount(){
        this.props.getAllLeagues();
    }

    handleInputChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

    handleSelect(e){
        this.setState({leagueID: e.target.value})
    }

    handleSubmitForm(e){
        e.preventDefault()

        if(this.state.leagueID && this.state.teamName && this.state.city && 
            this.state.state && this.state.zip && this.props.user.user_id){

            const team = {
                leagueID: this.state.leagueID,
                userID: this.props.user.user_id,
                teamName: this.state.teamName,
                city: this.state.city,
                state: this.state.state,
                zip: this.state.zip
            }

            axios.post('/api/team', team).then((result)=> {
                this.props.getManagedTeams(this.props.user.user_id)
                this.resetState();
            }).catch((err)=> {
                console.log(err.response);
            })
        }
    }

    resetState(){
        this.setState({
            leagueID: '',
            teamName: '',
            city: '',
            state: '',
            zip: ''
        })
    }

    render(){
        let leagues=[]
        if(this.props.leagues){
            leagues = this.props.leagues.map((value, index)=> {
                return (
                    <option key={value.league_name+index} value={value.league_id}>{value.league_name}</option>
                )
            })
        }

        return(
            <div className='coach-team-form-container'>
                <form className='coach-team-form'>
                    <select required onChange={(e)=>this.handleSelect(e)} >
                        <option value='Select League'>Select League</option>
                        {leagues}
                    </select>
                    <input value={this.state.teamName} type='text' name='teamName' 
                        placeholder='Team Name' onChange={(e)=>this.handleInputChange(e)}/>
                    <input value={this.state.city} type='text' name='city' 
                        placeholder='City' onChange={(e)=>this.handleInputChange(e)}/>
                    <input value={this.state.state} type='text' name='state' 
                        placeholder='State' onChange={(e)=>this.handleInputChange(e)}/>
                    <input value={this.state.zip} type='number' name='zip' 
                        placeholder='Zipcode' onChange={(e)=>this.handleInputChange(e)}/>
                    <input type='submit' placeholder='Create Team' onClick={(e)=>this.handleSubmitForm(e)}/>
                </form>
                
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        leagues: state.leagueReducer.leagues,
        user: state.userReducer.user
    }
}

export default connect(mapStateToProps, {getAllLeagues, getManagedTeams})(CoachTeamForm);