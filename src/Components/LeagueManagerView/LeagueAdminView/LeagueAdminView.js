import React from 'react';
import {withRouter} from 'react-router-dom';

export class LeagueAdminView extends React.Component{
    constructor(props){
        super(props);

        this.state={
        }
    }

    render(){
        return(
            <div className='league-admin-view-container'>
                League Admin    
            </div>
        )
    }
}

export default withRouter(LeagueAdminView)