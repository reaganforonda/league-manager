import React from 'react';
import SquadViewHeader from './SquadViewHeader';
import CreatePlayerForm from '../TeamPlayer/CreatePlayerForm';

export default class SquadView extends React.Component{
    constructor(props) {
        super(props);

        this.state={
            
        }
    }

    render(){
        return (
            <div className='squad-view-container'>
                <SquadViewHeader/>
                <CreatePlayerForm/>
            </div>
        )
    }
}