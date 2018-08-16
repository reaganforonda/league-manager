import React from 'react';
import {connect} from 'react-redux';
import {Switch, Route, withRouter} from 'react-router-dom';

export class StadiumView extends React.Component{
    constructor(props){
        super(props);

        this.state={}
    }

    render(){
        return (
            <div className='stadium-view-container'>
                Stadium View 
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        user: state.userReducer.user,
        managedLeagues: state.leagueReducer.managedLeagues,
    }
}

export default connect(mapStateToProps, {})(withRouter(StadiumView))