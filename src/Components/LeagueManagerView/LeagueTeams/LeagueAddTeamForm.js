import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';


export class LeagueAddTeamForm extends React.Component{
    constructor(props){
        super(props);

        this.state=[]
    }

    render(){
        return (
            <div className='league-add-team-form'>

            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        user: state.userReducer.user
    }
}

export default connect(mapStateToProps, {})(withRouter(LeagueAddTeamForm));