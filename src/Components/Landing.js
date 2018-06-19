import React from 'react';

export default class Landing extends React.Component{
    render(){
        return (
            <div className='landing-container'>
                <div className='landing-buttons'>
                    <button>Sign In</button>
                    <button>Sign Up</button>
                </div>
            </div>
        )
    }
}