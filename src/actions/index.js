


export const addTask = (data) => {
    return {
        type: "Add-Task",
        payload: {
            id: new Date().getTime().toString(),
            data: data
        }
    }
}

export const deleteTask = (id) => {
    return {
        type: "Delete-Task",
        id
    }
}



