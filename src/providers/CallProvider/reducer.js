export const ACTION_TYPES = {
  SET_CALLS: 'SET_CALLS',
  SET_CALL_DETAIL: 'SET_CALL_DETAIL',
  REQUEST_CALLS: 'REQUEST_CALLS', // TODO: rename
  TOGGLE_CALL_DETAIL: 'TOGGLE_CALL_DETAIL',
  SET_ERROR: 'SET_ERROR',
}

export const INITIAL_STATE = {
  calls: [],
  selectedCall: {},
  isCallDetailOpen: false,
  isLoading: false,
  isError: false,
}

export const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_CALLS:
      return {
        ...state,
        calls: action.payload,
        isLoading: false,
      }

    case ACTION_TYPES.SET_CALL_DETAIL:
      return {
        ...state,
        selectedCall: action.payload,
        isLoading: false,
      }

    case ACTION_TYPES.REQUEST_CALLS:
      return {
        ...state,
        isLoading: true,
      }

    case ACTION_TYPES.TOGGLE_CALL_DETAIL:
      return {
        ...state,
        isCallDetailOpen: action.payload,
      }

    case ACTION_TYPES.SET_ERROR: {
      return {
        ...state,
        isError: true,
      }
    }

    default:
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}
