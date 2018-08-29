import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';


export class SeasonDetailView extends React.Component{
    constructor(props){
        super(props);

        this.state={}
    }


    render(){
        return (
            <div className='league-season-detail-view'>
                <div className='league-season-detail-view-row'>
                    
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.userReducer.user,
        managedLeagues: state.leagueReducer.managedLeagues,
        allSeasonsManager : state.seasonReducer.allSeasonsManager,
        seasonLeague: state.seasonReducer.seasonLeague
    }
}

export default connect(mapStateToProps, {})(withRouter(SeasonDetailView));