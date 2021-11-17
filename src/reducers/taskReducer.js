
const initialData = {
    list: []
}

const taskReducer  = (state= initialData, action)=>{
    switch(action.type){
        case 'Add-Task':
            const {id, data} = action.payload;

            return {
                ...state,
                list: [
                    ...state.list,
                    {
                        id: id,
                        data: data
                    }
                ]
            }

            case 'Delete-Task':
                const newList = state.list.filter((elem)=>elem.id !== action.id);
    
                return {
                    ...state,
                   list: newList
                }    

            
                
        default: return state;    
    }
}

export default taskReducer;