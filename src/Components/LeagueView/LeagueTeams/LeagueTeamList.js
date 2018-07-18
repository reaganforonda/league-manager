import React from 'react';
import {connect} from 'react-redux';


export class LeagueTeamList extends React.Component{
    render(){
        return(
            <div className='league-team-list-container'>
                
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        
    }
}

export default connect(mapStateToProps, {})(LeagueTeamList)
