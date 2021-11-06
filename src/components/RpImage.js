import React from 'react'
import img1 from '../img/60111.jpg'
const RpImage = () => {
    const styling ={
        height: 200,
        width: 200
    } 
    return (
        <div   >
                <img src= {img1} alt="txt" style = {styling} id="profile-pic" className = 'ml-5 image-fluid my-2' />         
        </div>
    )
}

export default RpImage
