export const NEW_TODO = 'NEW_TODO';
export const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE';

export const addTodo = (todo) => {
    return {
        type: NEW_TODO,
        payload: todo
    }
}