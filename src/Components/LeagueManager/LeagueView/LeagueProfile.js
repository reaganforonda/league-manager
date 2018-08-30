import React from 'react'
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';


export class LeagueProfile extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            editMode: false,
            btnText: 'Edit'
        }
    }

    handleEditBtn(e) {
        if(this.state.editMode === false) {
            this.setState({editMode: true,
                btnText:'Save'
            });
        } else if(this.state.editMode === true) {
            this.setState({
                editMode: false,
                btnText: 'Edit'
            })
        }
    }

    render(){
        return (
            <div className='league-profile-container'>
                <form className='league-profile-form'>
                </form>
                <button onClick={(e)=>this.handleEditBtn(e)} >{this.state.btnText}</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.userReducer.user
    }
}

export default connect(mapStateToProps, {})(withRouter(LeagueProfile));