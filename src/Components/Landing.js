import React from 'react';
import {Link} from 'react-router-dom';

export default class Landing extends React.Component{
    render(){
        return (
            <div className='landing-container'>
                <div className='landing-buttons'>
                    <Link to='/login'><button>Sign In</button></Link>
                    <Link to='/'><button>Sign Up</button></Link>
                </div>
            </div>
        )
    }
}