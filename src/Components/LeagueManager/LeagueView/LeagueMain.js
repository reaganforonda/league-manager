import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {getManagedLeagues} from '../../../ducks/reducers/leagueReducer';
import LeagueList from './LeagueList';

export class LeagueMain extends React.Component{
    constructor(props){
        super(props);

        this.state={}
    }

    componentDidMount(){
        this.props.getManagedLeagues(this.props.user.user_id)
    }

    render(){
        return (
            <div className='league-main-container'>
                <LeagueList/>
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

export default connect(mapStateToProps, {getManagedLeagues})(withRouter(LeagueMain));