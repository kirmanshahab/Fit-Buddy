import React, {useState} from 'react'
 import Form from 'react-bootstrap/Form'
 import Col from 'react-bootstrap/Col'
 import Accordion from 'react-bootstrap/Accordion'


// import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Progress from './Progress'

 const FormRight = () => {

    const [card, setCard] = useState({})
    const [cardList, setCardList] = useState([])
    
    const onChangeHandler= ({target})=>{
        const {name,value}= target;
        setCard((prev) => {
            return(
                {
                    ...prev,
                    // eslint-disable-next-line no-restricted-globals
                    [name]: value
                }
            )
        })
    }
    const clickHandler = () =>{
        setCardList((prev) => {
            return(
                [...prev, card]
            )
        })
    }
 
    return (
        
        <div>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Accordion Item #1</Accordion.Header>
                    <Accordion.Body>
                        <Form>
                            <div className= 'd-flex justify-content-around align-items-center' >
                            <Form.Group as={Col} controlId="formGridExcercise"cl>
                                <label class="mr-sm-2" for="inlineFormCustomSelect">Exercises: </label>
                                <select class="custom-select mr-sm-2  form-control" id="inlineFormCustomSelect"  onChange={onChangeHandler} name='excercise'>
                                    <option selected>Choose An Exercise</option>
                                    <option  value='Running'>Running</option>  
                                    <option  value="Cycling">Cycling</option>
                                    <option  value='Swimming'>Swimming</option>
                                    <option  value="Hiking">Hiking</option>
                                    <option  value="Walking">Walking</option>
                                </select>  
                                <label for ="amount">Duration: </label>
                                <input type="text" name="amount" id="amount" placeholder="00:00:00.." className="p-holder  form-control" value= {card.amount} onChange={onChangeHandler}/>
                                <label for="date">Date: </label>
                                <input type="date" id="date" className="form-control" value={card.date} name='date' onChange={onChangeHandler}/>
                                </Form.Group>
                                
                                    
                                <textarea id="w3review" name="description" rows="7" style={{outline: 'none', borderRadius:'10px' }} cols="50" value= {card.description} onChange={onChangeHandler} placeholder='Description...'>
                                   
                                </textarea>
                                
                                
                            </div>


                            <div className= 'text-center'>
                            <button type='button' className= 'btn btn-primary mt-3' onClick= {clickHandler}>Submit</button>
                            </div>
                        </Form>
                    </Accordion.Body>
                </Accordion.Item>
  
            </Accordion>
            <Progress cardList= {cardList} setCardList={setCardList}/>
        </div>
           
        
    )
}

export default FormRight

