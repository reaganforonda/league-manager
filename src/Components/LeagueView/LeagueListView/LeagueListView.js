import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

export class LeagueListView extends React.Component{
    constructor(props){
        super(props);

        this.state={
            
        }
    }

    render(){
        return(
            <div className='league-view-list-container'>
                League View List 
            </div>
        )
    }
}

function mapStateToProps(state){
    return {

    }
}

export default connect(mapStateToProps, {})(withRouter(LeagueListView));