import React from 'react';
import {withRouter, Switch, Route} from 'react-router-dom';
import FixturesViewHeader from './FixturesViewHeader';

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
                    
                </main>
            </div>
        )
    }
}

export default withRouter(FixturesView)