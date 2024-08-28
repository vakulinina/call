import React from 'react'
import { useCallData } from '../../providers/CallProvider/CallProvider.js'
import { withLoader } from '../HOC/withLoader.jsx'
import { CallsList } from '../CallsList/CallsList.jsx'

const ArchivedContent = () => {
  const {
    state: { calls },
    operations: { toggleArchiveCalls, fetchCallDetail, toggleCallDetail },
  } = useCallData()

  const archivedCalls = React.useMemo(
    () =>
      calls
        .filter(({ is_archived }) => is_archived)
        .sort((a, b) => {
          return (
            new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
          )
        }),
    [calls]
  )
  const handleButtonClick = () => {
    toggleArchiveCalls({ calls: archivedCalls })
  }

  const handleCardClick = async ({ id }) => {
    await fetchCallDetail({ id })
    toggleCallDetail(true)
  }

  return (
    <CallsList
      calls={archivedCalls}
      buttonLabel="Unarchive all calls"
      onButtonClick={handleButtonClick}
      onCardClick={handleCardClick}
    />
  )
}

export const Archived = withLoader(ArchivedContent)
