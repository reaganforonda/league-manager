import React from 'react';
import {withRouter} from 'react-router-dom';

export function Error400View(props){
    function handleOnClick(e){
        e.preventDefault();

        props.history.push('/#/')
    }
    return(
        <div className='error-view-container'>
            <h1>Error 400: </h1>
            <button onClick={(e)=> handleOnClick(e)}>Home Page</button>
        </div>
    )

}
export default withRouter(Error400View)