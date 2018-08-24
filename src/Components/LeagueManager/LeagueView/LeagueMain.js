import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {getManagedLeagues} from '../../../ducks/reducers/leagueReducer';

export class LeagueMain extends React.Component{
    constructor(props){
        super(props);

        this.state=[]
    }

    componentDidMount(){
        // this.props.getManagedLeagues(this.props.user.user_id)TODO:
        this.props.getManagedLeagues(2)
    }

    render(){
        return (
            <div className='league-main-container'>
                League Main View
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