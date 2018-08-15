import React from 'react';
import {connect} from 'react-redux';
import {withRouter, Switch, Route} from 'react-router-dom';
import SeasonsViewHeader from './SeasonsViewHeader'
import AddSeasonForm from './AddSeasonForm';

export class SeasonsView extends React.Component{
    constructor(props){
        super(props);

        this.state={}
    }

    render(){
        return (
            <div className='seasons-view-container'>
                <SeasonsViewHeader/>
                <main className='seasons-view-main'>
                    <Switch>
                        <Route path='/league/dashboard/leagueadmin/seasons/add' component={AddSeasonForm}/>
                    </Switch>
                    
                </main>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        user: state.userReducer.user
    }
}

export default connect(mapStateToProps, {})(withRouter(SeasonsView));