import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

export class StadiumList extends React.Component{
    constructor(props) {
        super(props);

        this.state={
            allStadiums:[]
        }
    }
    componentDidMount (){
        this.setState({allStadiums: this.props.allStadiums})
    }

    render(){
        let allStadiums = this.state.allStadiums.map((stadium, index) => {
            return (
                <div className='stadium-list-row' key={stadium.stadium_id + stadium.stadium_name}>
                    {stadium.stadium_name}
                    {stadium.stadium_address}
                    {stadium.stadium_city}
                    {stadium.stadium_state}
                    {stadium.stadium_zip}
                </div>
            )
        })
        return (
            <div className='stadium-list-container'>
                {allStadiums}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.userReducer.user,
        allStadiums: state.stadiumReducer.allStadiums
    }
}

export default connect(mapStateToProps, {})(withRouter(StadiumList));