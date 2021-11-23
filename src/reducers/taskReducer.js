
const initialCardList = {
   cardList: [],
    
}

    


const taskReducer  = (state= initialCardList, actions)=>{
    
    
    switch(actions.type){
        case 'Add-Task':
            return { 
                ...state,
            
                cardList: [...state.cardList, {data: actions.payload.data, id: actions.payload.data } ]
            }
           
        case 'Delete-Task':
            const newList = state.cardList.filter((elem)=>elem.id !== actions.payload.id);
            return { 
                cardList: newList
            }
        
       
        
            
        


        default:
             return state;   
        
    }
}

export default taskReducer;