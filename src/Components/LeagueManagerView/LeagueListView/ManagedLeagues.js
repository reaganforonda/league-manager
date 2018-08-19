import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import ManagedLeaguesCard from './ManagedLeaguesCard'
import {loadLeagueInfo, getAllSeasons, getManagedLeagues} from '../../../ducks/reducers/leagueReducer'
import {getAllStadiums} from '../../../ducks/reducers/stadiumReducer';
import { getTeamsByLeague} from '../../../ducks/reducers/teamReducer';
import {getAllCurrentFixtures} from '../../../ducks/reducers/fixtureReducer';


export class ManagedLeagues extends React.Component{
    constructor(props){
        super(props);

        this.handleLeagueSelect = this.handleLeagueSelect.bind(this);
    }

    componentDidMount(){
        this.props.getManagedLeagues(this.props.user.user_id);
    }

    handleLeagueSelect = async (leagueID)=>{
        await axios.get(`api/league/${this.props.user.user_id}/${leagueID}`).then((league)=> {
            this.props.getAllSeasons(leagueID);
            this.props.loadLeagueInfo(league.data);
            this.props.getAllStadiums(leagueID);
            this.props.getTeamsByLeague(leagueID, this.props.user.user_id)
            this.props.history.push('/league/dashboard/leagueadmin/')
        }).catch((err)=> {
            console.log(err);
            // TODO:
        })  
    }

    render(){
        let managedLeagues=[];

        if(this.props.managedLeagues){
            managedLeagues = this.props.managedLeagues.map((league)=> {
                return <ManagedLeaguesCard key={league.league_id} league={league} selectLeague={()=>this.handleLeagueSelect(league.league_id)}/>
            })
        }

        return (
            <div className='managed-league-container'>
                {
                    managedLeagues.length > 0 ? <div className='managed-leagues-list-container'>{managedLeagues}</div> : null
                }
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        user: state.userReducer.user,
        managedLeagues: state.leagueReducer.managedLeagues,
        selectedLeague: state.leagueReducer.selectedLeague,
        seasonsLeague: state.leagueReducer.seasonsLeague,
        allStadiums : state.stadiumReducer.allStadiums,
        allCurrentSeasonFixtures : state.fixtureReducer.allCurrentSeasonFixtures
        
    }
}

export default connect(mapStateToProps, {getManagedLeagues, loadLeagueInfo, getAllSeasons, 
    getAllStadiums, getTeamsByLeague, getAllCurrentFixtures})(withRouter(ManagedLeagues))