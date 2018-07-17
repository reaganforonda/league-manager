import React from 'react';

export default class AddLeagueForm extends React.Component{
    constructor(props){
        super(props);

        this.state={
            leagueName:'',
            city: '',
            state:'',
            zipcode:'',
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.resetState = this.resetState.bind(this);
    }

    resetState(){
        this.setState({

        })
    }

    handleInputChange(e){
        this.setState({[e.target.name]: e.target.value})
    }
    render(){
        return (
            <div className='add-league-form-container'>
                <form className='add-league-form'>
                    <input type='text' name='leagueName' placeholder='League Name'/>
                    <input type='text' name='city' placeholder='City'/>
                    <input type='text' name='state' placeholder='State'/>
                    <input type='number' name='zipcode' placeholder='Zipcode'/>
                    <input type='submit' placeholder='Submit'/>
                </form>
            </div>
        )
    }
}