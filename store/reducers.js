import { ADD_TASK, COMPLETE_TASK } from "./types";

const initialState = {
    taskList: [],
};
  
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TASK:
            return {
                ...state,
                taskList: state.taskList.concat({
                    id: Math.random().toString(16).slice(2),
                    text: action.payload
                })
            };
        case COMPLETE_TASK:
            return {
                ...state,
                taskList: state.taskList.filter((task) => task.id !== action.payload),
            }
        default:
            return state;
    }
}

export default reducer;