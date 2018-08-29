import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import SeasonList from './SeasonList';

export class SeasonMain extends React.Component{
    constructor(props) {
        super(props);
        
        this.state={}
    }

    render(){
        return (
            <div className='league-season-main-container'>
                <SeasonList/>
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

export default connect(mapStateToProps, {})(withRouter(SeasonMain));    