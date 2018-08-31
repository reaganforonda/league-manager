import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {loadLeagueInfo, getManagedLeagues} from '../../../ducks/reducers/leagueReducer';

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
        this.props.getManagedLeagues(this.props.user.user_id)
        this.props.history.push('/leaguemanager/leagueview/detail')
    }

    render(){
        let allLeagues = this.state.leagues.map((value, index) => {
            return (
                <div onClick={(e)=>this.handleLeagueClick(e, value.league_id)} className='league-list-row' key={value.league_id}>
                    <h3>{value.league_name}</h3>
                    <p>{value.league_city}</p>
                    <p>{value.league_state}</p>
                    <p>{value.league_zip}</p>
                </div>
            )
        })
        return (
            <div className='league-list-container'>
                <div className='league-list-row-header'>
                    <h2>League Name</h2>
                    <h2>City</h2>
                    <h2>State</h2>
                    <h2>Zip Code</h2>
                </div>
                {allLeagues}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.userReducer.user,
        managedLeagues: state.leagueReducer.managedLeagues,
        selectedLeague: state.leagueReducer.selectedLeague
    }
}

export default connect(mapStateToProps, {loadLeagueInfo, getManagedLeagues})(withRouter(LeagueList))