import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';


export class SeasonAddForm extends React.Component{
    constructor(props) {
        super(props);

        this.state={}
    }

    render(){
        return (
            <div className='season-add-form-container'>
                <form className='season-add-form'>
                    <div className='season-add-form-row'>
                        Placeholder
                    </div>
                    <div className='season-add-form-row'>
                    </div>
                    <div className='season-add-form-row'>
                    </div>
                    <div className='season-add-form-row'>
                    </div>
                </form>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.userReducer.user,
        managedLeagues: state.leagueReducer.managedLeagues
    }
}

export default connect(mapStateToProps, {})(withRouter(SeasonAddForm));