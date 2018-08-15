import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

export class AddFixtureForm extends React.Component{
    constructor(props){
        super(props)

        this.state = {}
    }


    render(){
        return (
            <form className='add-fixture-form'>
                <div className='add-fixture-form-row'>
                    Fixture Date
                </div>
                <div className='add-fixture-form-row'>
                    Season
                </div>
                <div className='add-fixture-form-row'>
                    Stadium
                </div>
                <div className='add-fixture-form-row'>
                    Home Team
                </div>
                <div className='add-fixture-form-row'>
                    Away Team
                </div>
            </form>
        )
    }
}   

function mapStateToProps(state){
    return {
        user: state.userReducer.user,
        selectedLeague: state.leagueReducer.selectedLeague
    }
}

export default connect(mapStateToProps, {})(withRouter(AddFixtureForm));