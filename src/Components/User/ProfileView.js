import React from 'react';
import {connect} from 'react-redux';

export class ProfileView extends React.Component{
    constructor(props){
        super(props);

        this.state={
            editMode: false
        }
    }
    render(){
        return (
            <div className='profile-view-container'>
                <div className='profile-info-container'>
                    <div className='profile-info-row'>
                        First Name: <input disabled={this.props.editMode}/>
                    </div>
                    
                    <div className='profile-info-row'>
                        Last Name: <input disabled={this.props.editMode}/>
                    </div>
                    
                    <div className='profile-info-row'>
                        
                    </div>

                    <div className='profile-info-row'>
                    </div>

                    <div className='profile-info-row'>
                    </div>

                    <div className='profile-info-row'>
                    </div>
                </div>
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