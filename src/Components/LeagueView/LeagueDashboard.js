import React from 'react';
import {withRouter} from 'react-router-dom';


export class LeagueDashboard extends React.Component{
    render(){
        return (
            <div className='league-dashboard-container'>
                League Dashboard Container
            </div>
        )
    }
}

export default withRouter(LeagueDashboard);