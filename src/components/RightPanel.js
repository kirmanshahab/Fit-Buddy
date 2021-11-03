import React from 'react'
import RpImage from './RpImage'

import RpDailyChallenge from './RpDailyChallenge'
import RpBmi from './RpBmi';
import  './../App.css';


const RightPanel = () => {
    return (
        <div className= 'd-flex flex-column text-center rounded-end-3 mt-2'>
            <RpImage /> 
             
            <RpDailyChallenge />
            <RpBmi />
        </div>
            
        
    )
}

export default RightPanel

