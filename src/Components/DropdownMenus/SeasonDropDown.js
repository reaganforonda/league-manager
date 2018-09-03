import React from 'react';
import * as genUtil from '../../Utilities/generalUtil'

export default function SeasonDropDown(props) {

    
    let seasons = props.seasons.map((season, index) => {
        if(~~props.league === ~~season.league_id) {
            return(
                <option value={season.season_id} key={season.season_id + index}>{genUtil.formatDate(season.season_start_date)} - {genUtil.formatDate(season.season_end_date)}</option>
            )
        }
    })

    return (
        <select onChange={(e)=> props.selectSeason(e)} name='seasonID' className='league-season-drop-down'>
            <option value='' disabled selected>Select Season</option>
            {seasons}
        </select>
    )
}