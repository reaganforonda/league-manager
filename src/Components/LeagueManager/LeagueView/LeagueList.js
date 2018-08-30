import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {loadLeagueInfo} from '../../../ducks/reducers/leagueReducer';

export class LeagueList extends React.Component{
    constructor(props) {
        super(props);

        this.state={
            leagues:[]
        }

        this.handleLeagueClick = this.handleLeagueClick.bind(this);
    }

    componentDidMount(){
        this.setState({leagues: this.props.managedLeagues})
    }

    handleLeagueClick(e, leagueID) {
        e.preventDefault(e);
        this.props.loadLeagueInfo(this.props.user.user_id, leagueID)
        this.props.history.push('/leaguemanager/leagueview/detail')
    }

    render(){
        let allLeagues = this.state.leagues.map((value, index) => {
            return (
                <div onClick={(e)=>this.handleLeagueClick(e, value.league_id)} className='league-list-row' key={value.league_id}>
                    {value.league_name}
                </div>
            )
        })
        return (
            <div className='league-list-container'>
                {allLeagues}
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

export default connect(mapStateToProps, {loadLeagueInfo})(withRouter(LeagueList))