import React from 'react'
import Card from './Card'

const Progress = ({cardList, setCardList}) => {

    const remove = (id)=> {
        setCardList((prev)=> {
           return prev.filter((card,key)=>{
                return key !== id

            })
        })

    }

   
    return (
        
           <div className= 'd-flex justify-content-start flex-wrap'>
                {cardList.map((card, index) => {
                return(
                    
 
                    <Card cardList={cardList} key={index} card={card} remove={remove} id={index} />
                )
            })}
           </div>
        
    )
}

export default Progress
