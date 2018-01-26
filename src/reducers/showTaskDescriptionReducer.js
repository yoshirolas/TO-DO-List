const initState = {
  taskId: null,
}

function showTaskDescription (state = initState, action) {
  switch (action.type) {

    case 'SHOW_TASK_SETTINGS': {
      
      return {...state, taskId: action.id}
    }

    case 'CLOSE_TASK_SETTINGS': {

      return {...state, taskId: null}
    }

    default:

      return state;
  }
}

export default showTaskDescription;