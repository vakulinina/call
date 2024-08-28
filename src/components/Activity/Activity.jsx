import React from 'react'
import { useCallData } from '../../providers/CallProvider/CallProvider.js'
import { withLoader } from '../HOC/withLoader.jsx'
import { CallsList } from '../CallsList/CallsList.jsx'

const ActivityContent = () => {
  const {
    state: { calls },
    operations: { toggleArchiveCalls, fetchCallDetail, toggleCallDetail },
  } = useCallData()

  const activeCalls = React.useMemo(
    () =>
      calls
        .filter(({ is_archived }) => !is_archived)
        .sort(
          (a, b) =>
            new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
        ),
    [calls]
  )

  const handleButtonClick = React.useCallback(() => {
    toggleArchiveCalls({ calls: activeCalls })
  }, [activeCalls, toggleArchiveCalls])

  const handleCardClick = React.useCallback(
    async ({ id }) => {
      await fetchCallDetail({ id })
      toggleCallDetail(true)
    },
    [fetchCallDetail, toggleCallDetail]
  )

  return (
    <CallsList
      calls={activeCalls}
      buttonLabel="Archive all calls"
      onButtonClick={handleButtonClick}
      onCardClick={handleCardClick}
    />
  )
}

export const Activity = withLoader(ActivityContent)
