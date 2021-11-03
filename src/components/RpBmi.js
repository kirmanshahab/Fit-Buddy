import React, {useState} from 'react'





const RpBmi = () => {
    const [height, setHeight] = useState()
    const [weight, setWeight] = useState()
    const [bmi, setBmi] = useState(0)


    const  changeHandlerHeight = ({target})=> {
        const {value} = target
        setHeight(value)
   }


    const  changeHandlerWeight = ({target})=> {
        const {value} = target
        setWeight(value)
}


    const clickHandler = () => {     
        setBmi(weight/(height**2))
        
        
        }

   
    return (
        <div className="my-2">
            <h2 className="py-2">Calculate Your B.M.I (Body Mass Index)</h2>
            <div className="input-group mb-3">
                <input type="number" className="p-holder form-control   " placeholder="Enter Your Height in Metre" aria-label="Recipient's username" aria-describedby="basic-addon2" value= {height} name='height' onChange={changeHandlerHeight}/>
            </div>
            <div className="input-group mb-3">
                <input type="number" className="p-holder form-control  " placeholder="Enter Your Weight in KG" aria-label="Recipient's username" aria-describedby="basic-addon2 " value= {weight} name='weight' onChange={changeHandlerWeight}/>
                    
            </div>
            <div>
                {bmi}
            </div>
            <button className="btn text-white btn-block mb-3 bg-danger" type="button" onClick={clickHandler}>Submit</button>
        </div>
    )
}

export default RpBmi
