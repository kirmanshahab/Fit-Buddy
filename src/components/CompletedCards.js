import React from 'react'
import { useDispatch } from 'react-redux'
import { completeTask, deleteTask, deleteCompletedTask } from '../actions'



const CompletedCards = ({card}) => {
    const dispatch = useDispatch()

    const clickHandler = (id) =>{
        dispatch(deleteCompletedTask(id))
    }
    console.log(card)
    // const completedTask =(data)=>{
    //     dispatch(completeTask(data))
    //     dispatch(deleteTask(data.id))
    // }
    return (
        <div>
             <div className="card mx-5 my-3 border-bottom border-3 border-success" style={{width: '14rem', borderRadius: '20px'  }} >
                        <img className="card-img-top" src="" alt="" />
                        <div className="card-body fw-bolder">
                        Excercise:{card.data.excercise} <br />
                        Date:{card.data.date}  <br />
                        Duration:{card.data.amount} <br />
                        {/* id:{card.id}<br />  */}
                        Description <br /> {card.data.description}
  
                        </div>
                        <div className= 'd-flex justify-content-end me-2 mb-2'> 
                            {/* <button type='button' className='btn rounded-3 mx-auto ' onClick={()=>{completedTask(card)}}  >✔️</button> */}
                            {/* <input type='checkbox' className="mx-2 " name='isCompleted' checked={Checked} value={card.isCompleted} onClick={()=>{onCompleted(id)}} /> */}
                            <div className= 'd-flex justify-content-end ' onClick={()=>{clickHandler(card.id)}}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                </svg>
                            </div>
                        </div>

                    </div> 
        </div>
    )
}

export default CompletedCards
