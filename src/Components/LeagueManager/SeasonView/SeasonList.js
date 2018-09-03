import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {getAllSeasonsLeagueManager, leagueLoadSeason} from '../../../ducks/reducers/seasonReducer';
import * as genUtil from '../../../Utilities/generalUtil';

export class SeasonList extends React.Component{
    constructor(props) {
        super(props);

        this.state={
        }

        this.handleClick=this.handleClick.bind(this);
    }

    componentDidMount(){
        this.props.getAllSeasonsLeagueManager(this.props.user.user_id)
    }

    handleClick = async (e, value) => {
        e.preventDefault();

        this.loadLeague(value);
        this.props.history.push('/leaguemanager/seasons/detail');
    }

    loadLeague = async(value)=> {
        return await this.props.leagueLoadSeason(this.props.user.user_id, value.season_id, value.league_id);
    }

    render(){
        let allSeasons = []
        if(this.props.allSeasonsManager) {
            allSeasons = this.props.allSeasonsManager.map((value, index) => {
                return (
                    <div onClick={(e)=>this.handleClick(e, value)} className='season-list-row' key={value.season_id}>
                        {value.league_name}
                        {genUtil.formatDate(value.season_start_date)} - {genUtil.formatDate(value.season_end_date)}
                    </div>
                )
            })
        }

        return (
            <div className='season-list-container'>
                {allSeasons}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.userReducer.user,
        managedLeagues: state.leagueReducer.managedLeagues,
        allSeasonsManager : state.seasonReducer.allSeasonsManager
    }
}

export default connect(mapStateToProps, {getAllSeasonsLeagueManager, leagueLoadSeason})(withRouter(SeasonList))