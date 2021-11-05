import React from 'react'
import Card from './Card'

const Completed = ({completed, cardList,remove,checked,del}) => {
    return (
        <>
            <h3 className='text-center my-5 bg-primary rounded-pill py-3'>Completed</h3>

            <div className= 'd-flex justify-content-start flex-wrap '>
           { completed.map((card, index) => {
                return(
                    <Card cardList={cardList} key={index} card={card} id={index} remove={remove} Checked={checked} del={del}/>
                )
            })}
            </div>
        </>
    )
}

export default Completed
