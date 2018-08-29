import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';


export class PlayersAddForm extends React.Component{
    constructor(props) {
        super(props);

        this.state={
            leagueID: '',
            teamID: '',
            firstName: '',
            lastName: '',
            address: '',
            city: '',
            state: '',
            zip: '',
            email: '',
            position: '',
            active: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e) {
        this.setState({[e.target.name] : e.target.value});
    }

    handleSubmit(e){
        e.preventDefault();
    }

    render(){
        return (
            <div className='players-add-form-container'>
                <form className='players-add-form'>
                    <div className='players-add-form-row'>
                        League
                    </div>
                    <div className='players-add-form-row'>
                        Team
                    </div>
                    <div className='players-add-form-row'>
                    
                    
                    </div>
                    <div className='players-add-form-row'>
                    
                        <input onClick={(e) =>this.handleSubmit(e)} type='submit' placeholder='Submit'/>
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

export default connect(mapStateToProps, {})(withRouter(PlayersAddForm));