import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';


export class FixtureAddForm extends React.Component{
    constructor(props) {
        super(props);

        this.state={
            leagueID:'',

        }
    }

    render() {
        return (
            <div className='fixture-add-form-container'>
                <form className='fixture-add-form'>
                    <div className='fixture-add-form-row'>
                        League:
                    </div>
                    
                    <div className='fixture-add-form-row'>
                        Location:
                    </div>
                    <div className='fixture-add-form-row'>
                        Date:
                    </div>
                    <div className='fixture-add-form-row'>
                        Home Team:
                    </div>
                    <div className='fixture-add-form-row'>
                        Away Team:
                    </div>
                </form>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.userReducer.user,
    }
}

export default connect(mapStateToProps, {})(withRouter(FixtureAddForm));