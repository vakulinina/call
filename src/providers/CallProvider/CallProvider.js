import React from 'react'
import { getCalls, updateCall, getCallDetail } from '../../api'
import { INITIAL_STATE, ACTION_TYPES, reducer } from './reducer'

export const CallContext = React.createContext(undefined)

export const useCallData = () => React.useContext(CallContext)

export const CallDataProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, { ...INITIAL_STATE })

  const fetchCalls = React.useCallback(async () => {
    try {
      dispatch({ type: ACTION_TYPES.REQUEST_CALLS })
      const calls = await getCalls()
      dispatch({ type: ACTION_TYPES.SET_CALLS, payload: calls })
    } catch {
      dispatch({ type: ACTION_TYPES.SET_ERROR })
    }
  }, [])

  React.useEffect(() => {
    fetchCalls()
  }, [])

  const toggleArchiveCalls = React.useCallback(async ({ calls }) => {
    const requests = []

    try {
      calls.forEach(({ id, is_archived }) =>
        requests.push(updateCall({ id, isArchived: !is_archived }))
      )
      await Promise.all(requests)
      fetchCalls()
    } catch {
      dispatch({ type: ACTION_TYPES.SET_ERROR })
    }
  }, [])

  const fetchCallDetail = React.useCallback(async ({ id }) => {
    try {
      const callDetail = await getCallDetail({ id })
      dispatch({ type: ACTION_TYPES.SET_CALL_DETAIL, payload: callDetail })
    } catch {
      dispatch({ type: ACTION_TYPES.SET_ERROR })
    }
  }, [])

  const toggleArchiveCall = React.useCallback(async (call) => {
    try {
      dispatch({ type: ACTION_TYPES.REQUEST_CALLS })
      await updateCall({ id: call.id, isArchived: !call.is_archived })
      fetchCallDetail(call)
      fetchCalls()
    } catch {
      dispatch({ type: ACTION_TYPES.SET_ERROR })
    }
  }, [])

  const toggleCallDetail = React.useCallback((isOpen) => {
    dispatch({ type: ACTION_TYPES.TOGGLE_CALL_DETAIL, payload: isOpen })
  }, [])

  const api = React.useMemo(
    () => ({
      state,
      operations: {
        fetchCalls,
        fetchCallDetail,
        toggleArchiveCalls,
        toggleArchiveCall,
        toggleCallDetail,
      },
    }),
    [state]
  )

  return <CallContext.Provider value={api}>{children}</CallContext.Provider>
}
