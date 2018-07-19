import React from 'react';
import {connect} from 'react-redux';

export class ProfileView extends React.Component{
    render(){
        return (
            <div className='profile-view-container'>
                Profile View Container
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        user: state.userReducer.user
    }
}

export default connect(mapStateToProps, {})(ProfileView)