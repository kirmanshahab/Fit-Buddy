import * as api from '../api/index';


export const addTask =  (data) => async (dispatch) => {

    const res = await api.createtask(data); 
    
   
    dispatch( {
        type: "Add-Task",
        payload: {
            // id: new Date().getTime().toString(),
            data: res.data
        }
    })
}
// export const addTask = (task) => async (dispatch) => {
//     try {
//       const { data } = await api.createtask(task);
  
//       dispatch({ type: "Add-Task", payload: data });
//     } catch (error) {
//       console.log(error.message);
//     }
//   };

export const deleteTask = (id) => {

    api.deleteTask(id);
    return {
        type: "Delete-Task",
        payload: {
            id: id    
        }
    }
}
export const completeTask = (data) => {
    return {
        type: "Complete-Task",
        payload: {
            data : data.data,
            id: data.id  
        }
    }
}

export const deleteCompletedTask = (id) => {
    return {
        type: "Delete-Completed-Task",
        payload: {
            id: id    
        }
    }
}



