const initState = {
  useFilter: false,
  searchQuery: '',
  searchDone: false,
}

function changeSearchQuery (state = initState, action) {
	switch (action.type) {
	  case 'FILTER_TASK_BY_SEARCH_QUERY': {

      return {...state, searchQuery: action.query}
    }

    case 'FILTER_TASK_BY_DONE': {

      return {...state, 
        searchDone: !state.searchDone, 
        useFilter: !state.useFilter
      }
    }

    case 'CLEAR_SEARCH_QUERY': {

      return {...state, searchQuery: ''}
    }

    default:
      return state;
  }
}

export default changeSearchQuery;