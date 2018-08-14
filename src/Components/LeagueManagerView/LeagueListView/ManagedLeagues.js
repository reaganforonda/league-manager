import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import ManagedLeaguesCard from './ManagedLeaguesCard'
import {getManagedLeagues} from '../../../ducks/reducers/leagueReducer'
import axios from 'axios';

export class ManagedLeagues extends React.Component{
    constructor(props){
        super(props);

        this.handleLeagueSelect = this.handleLeagueSelect.bind(this);
        this.retreiveLeagueInfo = this.retreiveLeagueInfo.bind(this);
    }

    componentDidMount(){
        this.props.getManagedLeagues(this.props.user.user_id);
    }

    handleLeagueSelect(leagueID){
        this.retreiveLeagueInfo(leagueID);
    }

    retreiveLeagueInfo(leagueID){
        axios.get(`api/league/${this.props.user.user_id}/${leagueID}`).then((league)=> {
            return league.data
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
        managedLeagues: state.leagueReducer.managedLeagues
    }
}

export default connect(mapStateToProps, {getManagedLeagues})(withRouter(ManagedLeagues))