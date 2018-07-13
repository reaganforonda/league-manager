import React from 'react';
import { connect } from 'react-redux';
import {getAllLeagues} from '../../../ducks/reducers/leagueReducer'

export class CoachTeamForm extends React.Component{
    constructor(props){
        super(props);

        this.state={
            leagueID: 1,
            teamName: '',
            city: '',
            state: '',
            zip: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleInputChange = this.handleSubmitForm.bind(this);
        this.resetState = this.resetState.bind(this);
    }

    componentDidMount(){
        this.props.getAllLeagues();
    }

    handleInputChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmitForm(e){
        e.preventDefault();

        const team = {
            leagueID: this.state.leagueID,
            teamName: this.state.teamName,
            city: this.state.city,
            state: this.state.state,
            zip: this.state.zip
        }

    }

    resetState(){
        this.setState({
            leagueID: 1,
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
                    <select key={value.league_name+index}>
                        <option value={value.league_name}>{value.league_name}</option>
                    </select>
                )
            })
        }
        
        
        return(
            <div className='coach-team-form-container'>
                <form className='coach-team-form'>
                    {leagues}
                    <input type='text' name='teamName' placeholder='Team Name' onChange={(e)=>this.handleInputChange(e)}/>
                    <input type='text' name='city' placeholder='City' onChange={(e)=>this.handleInputChange(e)}/>
                    <input type='text' name='state' placeholder='State' onChange={(e)=>this.handleInputChange(e)}/>
                    <input type='number' name='zip' placeholder='Zipcode' onChange={(e)=>this.handleInputChange(e)}/>
                    <input type='submit' placeholder='Create Team'/>
                </form>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        leagues: state.leagueReducer.leagues
    }
}

export default connect(mapStateToProps, {getAllLeagues})(CoachTeamForm);