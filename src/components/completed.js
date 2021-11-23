import React from 'react'

import { useSelector } from 'react-redux'
import CompletedCards from './CompletedCards'

// const dispatch = useDispatch()
const Completed = ({cardList,remove,checked,del}) => {
    const completed= useSelector((state)=> state.completedReducer.completedlist)
    
    return (
        <>
            <h3 className='text-center my-5 bg-primary text-white rounded-pill py-3'>Completed</h3>

            <div className= 'd-flex justify-content-start flex-wrap '>
           { completed.map((card, index) => {
                return(
                    <CompletedCards  key={index} card={card}  />
                )
            })}
            </div>
        </>
    )
}

export default Completed
