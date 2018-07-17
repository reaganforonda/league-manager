import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';

import {getManagedLeagues} from '../../../ducks/reducers/leagueReducer'

export class AddLeagueForm extends React.Component{
    constructor(props){
        super(props);

        this.state={
            leagueName:'',
            city: '',
            state:'',
            zipcode:'',
            displaySuccessRow: false,
            validForm: false
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.resetState = this.resetState.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.validateAcctType = this.validateAcctType.bind(this);
    }


    resetState(){
        this.setState({
            leagueName:'',
            city: '',
            state:'',
            zipcode:'',
        })
    }

    handleInputChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

    validateAcctType(){
        if(this.props.user.acct_type === 1 && this.props.user.user_id){
            return true;
        } else {
            return false;
        }
    }

    handleSubmit(e){
        e.preventDefault();

        if(this.validateAcctType()){
            let league={
                user_id: this.props.user.user_id,
                leagueName: this.state.leagueName,
                leagueCity: this.state.city,
                leagueState: this.state.state,
                leagueZipcode: this.state.zipcode
            }

            axios.post('/api/register/league',league).then((league)=> {
                this.props.getManagedLeagues(this.props.user.user_id);
                this.setState({displaySuccessRow: true})
                this.resetState();
            }).catch((err)=>{
                console.log(`Error while attempting to add league: ${league}`)
            })
        } else {
            // TODO: ADD SOMETHING
        }
    }

    render(){
        return (
            <div className='add-league-form-container'>
                <form className='add-league-form'>
                    <div className='add-league-form-row'>
                        <input required type='text' name='leagueName' placeholder='League Name' 
                            onChange={(e)=>this.handleInputChange(e)}/>
                    </div>
                    <div className='add-league-form-row'>
                        <input required type='text' name='city' placeholder='City' 
                            onChange={(e)=>this.handleInputChange(e)}/>
                    </div>
                    <div className='add-league-form-row'>
                        <input required type='text' name='state' placeholder='State' 
                            onChange={(e)=>this.handleInputChange(e)}/>
                    </div>
                    <div className='add-league-form-row'>
                        <input required type='number' name='zipcode' placeholder='Zipcode' 
                            onChange={(e)=>this.handleInputChange(e)}/>
                    </div>
                    <div className='add-league-form-row'>
                        <input type='submit' placeholder='Submit' onClick={(e)=>this.handleSubmit(e)}/>
                    </div>
                </form>
                {
                    this.state.displaySuccessRow ? (
                        <div className='add-league-success-row'>League Successfully Added</div>
                    ):null
                }
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        user: state.userReducer.user
    }
}

export default connect(mapStateToProps, {getManagedLeagues})(withRouter(AddLeagueForm))