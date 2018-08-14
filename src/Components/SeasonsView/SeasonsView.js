import React from 'react';
import {connect} from 'react-redux';
import SeasonsViewHeader from './SeasonsViewHeader'

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
                    Main
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

export default connect(mapStateToProps, {})(SeasonsView)