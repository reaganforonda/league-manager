import React from '../../../../../Library/Caches/typescript/2.9/node_modules/@types/react';
import {connect} from '../../../../../Library/Caches/typescript/2.9/node_modules/@types/react-router-dom';

export default class SeasonsView extends React.Component{
    constructor(props){
        super(props);

        this.state={}
    }

    render(){
        return (
            <div className='seasons-view-container'>
                Seasons View
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