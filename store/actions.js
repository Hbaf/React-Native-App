import { ADD_TASK, COMPLETE_TASK } from "./types"

export const addTask = (task) => ({
    type: ADD_TASK,
    payload: task
});

export const completeTask = (id) => ({
    type: COMPLETE_TASK,
    payload: id,
});