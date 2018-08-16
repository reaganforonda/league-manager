import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import axios from 'axios';
import * as generalUtil from '../../Utilities/generalUtil'

export class AddStadiumForm extends React.Component{
    constructor(props){
        super(props);

        this.state={
            locationName: '',
            locationAddress: '',
            locationState: '',
            locationCity: '',
            locationZip: '',
            displayError: false
        };
        
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.resetForm = this.resetForm.bind(this);
        this.validateForm = this.validateForm.bind(this);
    }

    handleInputChange(e){
        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit(e){
        
        e.preventDefault();

        let location = {
            user: this.props.user,
            league_id : this.props.selectedLeague.league_id,
            stadium_name : this.state.locationName,
            stadium_address: this.state.locationAddress,
            stadium_city: this.state.locationCity,
            stadium_state : this.state.locationState,
            stadium_zip: this.state.locationZip
        }

        if(this.validateForm()){
            axios.post('/api/stadium', location).then((result) => {
                this.resetForm();
            }).catch((err) => {
                console.log(err);
            })
        } else {
            this.setState({displayError: true})
        }

        
    }

    validateForm(){
        if(generalUtil.validateCity(this.state.locationCity) && generalUtil.validateState(this.state.locationState) 
        && generalUtil.validateZipCode(this.setState.locationZip)){
            return true;
        } else {
            return false
        }
    }

    resetForm(){
        this.setState({
            locationName: '',
            locationAddress: '',
            locationState: '',
            locationCity: '',
            locationZip: '',
            displayError: false
        })
    }

    render(){
        return (
            <form className='add-stadium-form'>
                <div className='add-stadium-form-row'>
                    <input type='text' value={this.state.locationName} 
                        onChange={(e)=>this.handleInputChange(e)} name='locationName' placeholder='Location Name'/>
                </div>
                <div className='add-stadium-form-row'>
                    <input type='text' value={this.state.locationAddress} 
                        onChange={(e)=>this.handleInputChange(e)} name='locationAddress' placeholder='Address'/>
                </div>
                <div className='add-stadium-form-row'>
                    <input type='text' value={this.state.locationCity} 
                        onChange={(e)=>this.handleInputChange(e)} name='locationCity' placeholder='City'/>
                </div>
                <div className='add-stadium-form-row'>
                    <input type='text' value={this.state.locationState} 
                        onChange={(e)=>this.handleInputChange(e)} name='locationState' placeholder='State'/>
                </div>
                <div className='add-stadium-form-row'>
                    <input type='text' value={this.state.locationZip} 
                        onChange={(e)=>this.handleInputChange(e)} name='locationZip' placeholder='Zip'/>
                </div>
                
                <div className='add-stadium-form-row'>
                    <input onClick={(e)=> this.handleSubmit(e)} type='submit' placeholder='Add Location'/>
                </div>

                {
                    this.state.displayError ? (<div className='add-stadium-form-row'>
                        <p>Error in Form Input</p> 
                    </div>) : null
                }
            </form>
            
        )
    }
}

function mapStateToProps(state){
    return {
        user: state.userReducer.user,
        selectedLeague: state.leagueReducer.selectedLeague,
    }
}

export default connect(mapStateToProps, {})(withRouter(AddStadiumForm))