const initState = {
  taskId: null,
}

function showTaskDescription (state = initState, action) {
  switch (action.type) {
    case 'SHOW_TASK_DESCRIPTION': {

      return {...state, taskId: action.id}
    }
    case 'SAVE_TASK_DESCRIPTION': {

      return {...state, taskId: null}
    }

    default:

      return state;
  }
}

export default showTaskDescription;