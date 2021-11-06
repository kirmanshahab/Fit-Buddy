import React from 'react';
import { useHistory } from 'react-router-dom';
import '../css/stylesheet.css';
import logo3 from '../img/logo-3.png';
import EditExerciseModal from './editExerciseModal';
import InProgress from './InProgress';
import Pending from './pending';
import RpImage from './RpImage'

function Sidebar() {
    const history = useHistory();
    return (
        <div>
            <div className="bg-primary">
            <div className="mt-3">
                    <img className="img-fluid mx-auto d-block" src={logo3}/>
                </div>
                <div className="">
                    <div className="d-flex flex-column">
                        {/* <EditExerciseModal/>
                        <InProgress/>
                        <Pending/> */}
                        
                        <RpImage/>
                        
                        
                    </div>
             
                    
                </div>
                <div class="pt-5">
                    <a className="btn btn-light btn-block text-primary mb-3" onClick={()=> history.push('/')}>Log out </a>      
                    
                </div>

            </div>
            
        </div>
    )
}

export default Sidebar;
