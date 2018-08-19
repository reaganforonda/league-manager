import React from 'react';
import {withRouter, Switch, Route} from 'react-router-dom';
import FixturesViewHeader from './FixturesViewHeader';
import AddFixtureForm from './AddFixtureForm';
import FixtureListView from './FixtureListView'

export class FixturesView extends React.Component{
    constructor(props){
        super(props);

        this.state={}
    }

    render(){
        return (
            <div className='fixtures-view-container'>
                <FixturesViewHeader/>
                <main className='fixtures-view-main'>
                    <Switch>
                        <Route path='/league/dashboard/leagueadmin/fixtures/list' component={FixtureListView}/>
                        <Route path='/league/dashboard/leagueadmin/fixtures/add' component={AddFixtureForm}/>
                    </Switch>
                </main>
            </div>
        )
    }
}

export default withRouter(FixturesView)