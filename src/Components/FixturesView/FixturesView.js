import React from 'react';
import {withRouter} from 'react-router-dom';

export class FixturesView extends React.Component{
    constructor(props){
        super(props);

        this.state={}
    }

    render(){
        return (
            <div className='fixtures-view-container'>
                Fixtures View
            </div>
        )
    }
}