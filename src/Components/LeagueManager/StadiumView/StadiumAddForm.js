import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';


export class StadiumAddForm extends React.Component{
    constructor(props) {
        super(props);

        this.state={}
    }


    render(){
        return (
            <div className='stadium-add-form-container'>
                Add Form
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.userReducer.user
    }
}

export default connect(mapStateToProps, {})(withRouter(StadiumAddForm));