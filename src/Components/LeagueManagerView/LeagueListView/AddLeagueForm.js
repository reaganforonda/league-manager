import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';

import {getManagedLeagues} from '../../../ducks/reducers/leagueReducer'
import generalUtil from '../../../Utilities/generalUtil'

export class AddLeagueForm extends React.Component{
    constructor(props){
        super(props);

        this.state={
            leagueName:'',
            city: '',
            state:'',
            zipcode:'',
            displaySuccessRow: false,
            validLeagueName: true,
            validLeagueCity: true,
            validLeagueState: true,
            validLeagueZip: true,
            validForm: false,
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.resetState = this.resetState.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.validateAcctType = this.validateAcctType.bind(this);
        this.validateForm = this.validateForm.bind(this);
    }

    resetState(){
        this.setState({
            leagueName:'',
            city: '',
            state:'',
            zipcode:'',
            displaySuccessRow: false,
            validLeagueName: true,
            validLeagueCity: true,
            validLeagueState: true,
            validLeagueZip: true,
            validForm: false
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
    
    async validateForm(){
        if(!generalUtil.validateLeagueName(this.state.leagueName)){
            this.setState({validLeagueName: false})
        } else if(!generalUtil.validateCity(this.state.city)){
            this.setState({validLeagueCity: false})
        } else if(!generalUtil.validateState(this.state.state)) {
            this.setState({validLeagueState: false})
        } else if(!generalUtil.validateZipCode(this.state.zipcode)){
            this.setState({validLeagueZip: false})
        }

        if(this.state.validLeagueName && this.state.validLeagueCity && 
            this.state.validLeagueState && this.state.validLeagueZip) {
                await this.setState({validForm: true})
            } else {
                await this.setState({validForm: false})
            }
    }

    handleSubmit(e){
        e.preventDefault();
        this.validateForm().then(()=> {
            if(this.validateAcctType() && this.state.validForm){
                let league={
                    user_id: this.props.user.user_id,
                    leagueName: this.state.leagueName,
                    leagueCity: this.state.city,
                    leagueState: this.state.state,
                    leagueZip: this.state.zipcode
                }
    
                axios.post('/api/register/league',league).then((league)=> {
                    this.props.getManagedLeagues(this.props.user.user_id);
                    this.setState({displaySuccessRow: true})
                    this.resetState();
                }).catch((err)=>{
                    console.log(`Error while attempting to add league: ${err}`)
                })
            } else {
                // TODO: ADD SOMETHING
                console.log('Error')
            }
        })
    }

    render(){
        return (
            <div className='add-league-form-container'>
                <form className='add-league-form'>
                    <div className='add-league-form-row'>
                        <input maxLength='40' required type='text' name='leagueName' placeholder='League Name' 
                            value={this.state.leagueName} onChange={(e)=>this.handleInputChange(e)}/>
                    </div>
                    {
                        this.state.validLeagueName ? null : (<div className='add-league-form-row-error'>
                            Invalid League Name
                        </div>)
                    }
                    <div className='add-league-form-row'>
                        <input required type='text' name='city' placeholder='City' 
                            value={this.state.city} onChange={(e)=>this.handleInputChange(e)}/>
                    </div>
                    {
                        this.state.validLeagueCity ? null : (<div className='add-league-form-row-error'>
                            Invalid City
                        </div>)
                    }
                    <div className='add-league-form-row'>
                        <input maxLength='2' required type='text' name='state' placeholder='State' 
                            value={this.state.state} onChange={(e)=>this.handleInputChange(e)}/>
                    </div>
                    {
                        this.state.validLeagueState ? null : (<div className='add-league-form-row-error'>
                            Invalid State
                        </div>)
                    }
                    <div className='add-league-form-row'>
                        <input required type='number' name='zipcode' placeholder='Zipcode' 
                            value={this.state.zipcode} onChange={(e)=>this.handleInputChange(e)}/>
                    </div>
                    {
                        this.state.validLeagueZip ? null : (<div className='add-league-form-row-error'>
                            Invalid Zipcode
                        </div>)
                    }
                    <div className='add-league-form-row'>
                        <input type='submit' placeholder='Submit' onClick={(e)=>this.handleSubmit(e)}/>
                    </div>
                </form>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        user: state.userReducer.user,
        managedLeagues: state.leagueReducer.mangedLeagues
    }
}

export default connect(mapStateToProps, {getManagedLeagues})(withRouter(AddLeagueForm))