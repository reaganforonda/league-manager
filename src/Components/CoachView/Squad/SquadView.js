import React from 'react';
import SquadViewHeader from './SquadViewHeader'

export default class SquadView extends React.Component{
    render(){
        return (
            <div className='squad-view-container'>
                <SquadViewHeader/>
            </div>
        )
    }
}