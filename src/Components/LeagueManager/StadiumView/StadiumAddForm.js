import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {getAllStadiums} from '../../../ducks/reducers/stadiumReducer';
import axios from 'axios';

export class StadiumAddForm extends React.Component{
    constructor(props) {
        super(props);

        this.state={
            stadiumName: '',
            address : '',
            city: '',
            state: '',
            zip: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.resetForm = this.resetForm.bind(this);
    }

    handleInputChange(e) {
        this.setState({[e.target.name] : e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault();

        let stadium = {
            user: this.props.user,
            stadium_name: this.state.stadiumName,
            stadium_address : this.state.address,
            stadium_city: this.state.city,
            stadium_state: this.state.state,
            stadium_zip: this.state.zip
        }

        axios.post('/api/stadium', stadium).then((result) => {
            this.props.getAllStadiums();
            this.resetForm();
        }).catch((err) => {
            console.log(err);
        })
    }

    resetForm(){
        this.setState({
            stadiumName: '',
            address : '',
            city: '',
            state: '',
            zip: ''
        })
    }

    render(){
        return (
            <div className='stadium-add-form-container'>
                <form className='stadium-add-form'>
                    <div className='stadium-add-form-row'>
                        Stadium Name: <input name='stadiumName' onChange={(e)=>this.handleInputChange(e)} value={this.state.stadiumName} type='text'/>
                    </div>
                    <div className='stadium-add-form-row'>
                        Address: <input name='address' onChange={(e)=>this.handleInputChange(e)} value={this.state.address} type='text'/>
                    </div>
                    <div className='stadium-add-form-row'>
                        City: <input name='city' onChange={(e)=>this.handleInputChange(e)} value={this.state.city} type='text'/>
                    </div>
                    <div className='stadium-add-form-row'>
                        State: <input name='state' onChange={(e)=>this.handleInputChange(e)} value={this.state.state} type='text'/>
                    </div>
                    <div className='stadium-add-form-row'>
                        Zip: <input name='zip' onChange={(e)=>this.handleInputChange(e)} value={this.state.zip} type='text'/>
                    </div>
                    <div className='stadium-add-form-row'>
                        <input type='submit' placeholder='Submit' onClick={(e)=>this.handleSubmit(e)} />
                    </div>
                </form>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.userReducer.user
    }
}

export default connect(mapStateToProps, {getAllStadiums})(withRouter(StadiumAddForm));