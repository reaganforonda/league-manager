import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

export class LeagueList extends React.Component{
    constructor(props) {
        super(props);

        this.state={
            leagues:[]
        }
    }

    componentDidMount(){
        this.setState({leagues: this.props.managedLeagues})
    }

    render(){
        let allLeagues = this.state.leagues.map((value, index) => {
            return (
                <div className='league-list-row' key={value.league_id}>
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

export default connect(mapStateToProps, {})(withRouter(LeagueList))