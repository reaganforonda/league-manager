import React from 'react';
import {connect} from 'react-redux';
import {Switch, Route, withRouter} from 'react-router-dom';
import StadiumViewHeader from './StadiumViewHeader'
import AddStadiumForm from './AddStadiumForm';

export class StadiumView extends React.Component{
    constructor(props){
        super(props);

        this.state={}
    }

    render(){
        return (
            <div className='stadium-view-container'>
            <StadiumViewHeader/>
                <main className='stadium-view-main'>
                    <Switch>
                        {/* <Route path='/league/dashboard/locations/all' component={}/> */}
                        <Route path='/league/dashboard/locations/add' component={AddStadiumForm}/>
                    </Switch>
                </main>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        user: state.userReducer.user,
        managedLeagues: state.leagueReducer.managedLeagues,
    }
}

export default connect(mapStateToProps, {})(withRouter(StadiumView))