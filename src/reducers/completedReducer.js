

const initialList = {
    completedlist: [],
     
 }

 const completedReducer  = (state= initialList, action)=>{
    
    
    switch(action.type){
     
        case 'Complete-Task':
            
            return { 
                
                completedlist: [...state.completedlist, {data: action.payload.data, id: action.payload.id }]
            }
            
            case 'Delete-Completed-Task':
                const newList = state.completedlist.filter((elem)=>elem.id !== action.payload.id);
                return { 
                    completedlist: newList
                }


        default:
             return state;   
        
    }
}

export default completedReducer;