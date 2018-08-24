import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

export class TeamAddForm extends React.Component{
    constructor(props) {
        super(props);

        this.state={};

        this.handleInputChange = this.handleInputChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    handleInputChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    submitForm(e){
        e.preventDefault();
    }

    render(){
        return (
            <div className='league-team-add-form-container'>
                <form className='league-team-add-form'>
                    <div className='league-team-add-form-row'>
                        Team Name: <input/>
                    </div>
                    <div className='league-team-add-form-row'>
                    
                    </div>
                </form>
                <button>Submit</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.userReducer.user
    }
}

export default connect(mapStateToProps, {})(withRouter(TeamAddForm))