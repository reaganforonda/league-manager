import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

export class AddSeasonForm extends React.Component{
    constructor(props){
        super(props);

        this.state={
            seasonStartDate: '',
            seasonEndDate: '',
        }
    }

    addNewSeason(){
        
    }

    render(){
        return(
            <form className='add-season-form'>
                <div className='add-season-form-row'>
                    Season Start Date
                </div>
                <div className='add-season-form-row'>
                    Season End Date
                </div>
            </form>
        )
    }
}

function mapStateToProps(state){
    return{
        user: state.userReducer.user,
        selectedLeague : state.leagueReducer.selectedLeague
    }
}

export default connect(mapStateToProps, {})(withRouter(AddSeasonForm))