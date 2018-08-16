import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import axios from 'axios';

export class AddStadiumForm extends React.Component{
    constructor(props){
        super(props);

        this.state={
            locationName: '',
            locationAddress: '',
            locationState: '',
            locationCity: '',
            locationZip: ''
        };
        
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.resetForm = this.resetForm.bind(this);
    }

    handleInputChange(e){
        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit(e){
        
        e.preventDefault();

        let location = {
            user: this.props.user,
            stadium_name : this.state.locationName,
            stadium_address: this.state.locationAddress,
            stadium_city: this.state.locationCity,
            stadium_state : this.state.locationState,
            stadium_zip: this.state.locationZip
        }

        axios.post('/api/stadium', location).then((result) => {
            console.log(result);
            this.resetForm();
        }).catch((err) => {
            console.log(err);
        })
    }

    resetForm(){
        this.setState({
            locationName: '',
            locationAddress: '',
            locationState: '',
            locationCity: '',
            locationZip: ''
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