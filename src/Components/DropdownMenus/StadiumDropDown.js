import React from 'react';

export default function StadiumDropDown(props) {
    let stadiums = props.stadiums.map((stadium, index) => {
        return <option value={stadium.stadium_id} key={stadium.stadium_id+stadium.stadium_name + index}>{stadium.stadium_name}</option>
    })

    return (
        <select onChange={(e) => props.selectStadium(e)} name='stadiumID' className='league-stadium-drop-down'>
            <option value='' disabled selected>Select Stadium</option>
            {stadiums}
        </select>
    )
}