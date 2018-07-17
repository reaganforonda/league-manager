import React from 'react';
import {withRouter, Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import LeagueListViewHeader from './LeagueListViewHeader'
import AddLeagueForm from './AddLeagueForm'

export class LeagueListView extends React.Component{
    constructor(props){
        super(props);

        this.state={
            
        }
    }

    render(){
        return(
            <div className='league-view-list-container'>
                    <LeagueListViewHeader/>
                <div className='league-view-list-main-section'>
                    <Switch>
                        <Route path='/league/dashboard/leaguelistview/add' component={AddLeagueForm}/>
                    </Switch>
                </div> 
            </div>
        )
    }
}

function mapStateToProps(state){
    return {

    }
}

export default connect(mapStateToProps, {})(withRouter(LeagueListView));