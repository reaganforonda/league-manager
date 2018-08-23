import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';


export class CreateTeamForm extends React.Component {
    constructor(props){
        super(props);

        this.state={
            teamName:'',
            league: '',
            teamCity: '',
            teamState: '',
            teamZip: ''
        }
        
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(e){
        this.setState({[e.target.name] : e.target.value})
    }

    render(){
        return (
            <div className='create-team-form-container'>
                <form className='create-team-form'>
                    <div className='create-team-form-row'>
                        Team Name: <input name='teamName' type='text' value={this.state.teamName} 
                            onChange={(e)=>this.handleInputChange(e)} />
                    </div>
                    <div className='create-team-form-row'>
                        League
                    </div>
                    <div className='create-team-form-row'>
                        Team City: <input name='teamCity' type='text' value = {this.state.teamCity} 
                            onChange={(e)=>this.handleInputChange(e)}/>
                    </div>
                    <div className='create-team-form-row'>
                        Team State: <input name='teamState' type='text' value = {this.state.teamState} 
                            onChange={(e)=>this.handleInputChange(e)}/>
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

export default connect(mapStateToProps, {})(withRouter(CreateTeamForm));