import React from 'react';
import {Switch, Route, withRouter} from 'react-router-dom';
import LeagueManagerDashboard from '../Dashboard/Dashboard'
import LeagueView from '../LeagueView/LeagueView';
import TeamView from '../TeamView/TeamView';
import FixtureView from '../FixtureView/FixtureView';
import SideNav from '../SideMenu/SideNav';
import Header from '../../Header/Header';
import axios from 'axios';
import {connect} from 'react-redux';
import {getManagedLeagues} from '../../../ducks/reducers/leagueReducer';
import {getManagedTeams} from '../../../ducks/reducers/teamReducer';
import {getAllPlayersLM} from '../../../ducks/reducers/playersReducer';
import {getAllStadiums} from '../../../ducks/reducers/stadiumReducer';
import {getAllSeasonsLeagueManager} from '../../../ducks/reducers/seasonReducer';
import {getFixtures} from '../../../ducks/reducers/fixtureReducer';
import SeasonView from '../SeasonView/SeasonView';
import PlayersView from '../PlayersView/PlayersView';
import Loading from '../../Loading/Loading';
import StadiumView from '../StadiumView/StadiumView';

export class LeagueManagerMainView extends React.Component {
    constructor(props){
        super(props);

        this.state={
            loading: true,
        }
    }

    componentDidMount = async ()=> {
        await axios.get('/api/auth/me').then((users) => {
            this.props.getManagedLeagues(this.props.user.user_id);
            this.props.getManagedTeams(this.props.user.user_id);
            this.props. getAllPlayersLM(this.props.user.user_id);
            this.props.getAllSeasonsLeagueManager(this.props.user.user_id);
            this.props.getFixtures(this.props.user.user_id);
            this.props.getAllStadiums();
        }).catch((err) => {
            this.props.history.push('/')
        })
    }

    static getDerivedStateFromProps(props, state) {
        if(props.managedLeagues && props.managedTeams && props.allPlayersLeagueManager 
            && props.allStadiums && props.allSeasonsManager && props.allFixtures) {
            return {
                loading: !(props.managedLeagues && props.managedTeams && props.allPlayersLeagueManager && 
                    props.allStadiums && props.allSeasonsManager && props.allFixtures)
            }
        }
    }

    render(){
        return (
            this.state.loading ? <Loading/> : (
                <div className='league-main-view-container'>
                <Header/>
                <main className='league-main-view-main'>
                    <SideNav/>
                    <Switch>
                        <Route path='/leaguemanager/dashboard' component={LeagueManagerDashboard}/>
                        <Route path='/leaguemanager/leagueview' component={LeagueView}/>
                        <Route path='/leaguemanager/teams' component={TeamView}/>
                        <Route path='/leaguemanager/fixtures' component={FixtureView}/>
                        <Route path='/leaguemanager/seasons' component={SeasonView}/>
                        <Route path='/leaguemanager/players' component={PlayersView}/>
                        <Route path='/leaguemanager/stadiums' component={StadiumView} />
                    </Switch>
                </main>
            </div>
            )
            
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.userReducer.user,
        managedLeagues : state.leagueReducer.managedLeagues,
        managedTeams : state.teamReducer.managedTeams,
        allPlayersLeagueManager: state.playerReducer.allPlayersLeagueManager,
        allStadiums: state.stadiumReducer.allStadiums,
        allSeasonsManager: state.seasonReducer.allSeasonsManager,
        allFixtures : state.fixtureReducer.allFixtures
    }
}

export default connect(mapStateToProps, {getManagedLeagues, getManagedTeams, 
    getAllSeasonsLeagueManager, getAllStadiums, getAllPlayersLM, getFixtures})(withRouter(LeagueManagerMainView));