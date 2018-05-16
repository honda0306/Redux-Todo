export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const COMPLETE_TODO = "COMPLETE_TODO";

let objID = 0;

export const addTodo = (value) => {
    objID += 1;
    return {
        type: ADD_TODO,
        payload: {
            id: objID,
            value: value,
            completed: false
        }
    };
};

export const deleteTodo = (i) => {
    return {
        type: DELETE_TODO,
        payload: {
            id: i,
        }
    };
};

export const completeTodo = (i) => {
    return {
        type: COMPLETE_TODO,
        payload: {
            id: i,
        }
    }
}