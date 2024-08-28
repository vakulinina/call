import React from 'react'
import { useCallData } from '../../providers/CallProvider/CallProvider.js'
import closeIcon from './images/back-icon.svg'
import avatar from './images/avatar.svg'
import { PHONE_NUMBERS } from '../../constants'
import { formatDateTime } from '../../helpers'
import { ArchiveButton } from '../ArchiveButton/ArchiveButton.jsx'
import { formatDuration } from '../../helpers/index.js'
import styles from './index.module.css'

export const CallDetail = () => {
  const {
    state: { selectedCall, isCallDetailOpen, isLoading },
    operations: { toggleCallDetail, toggleArchiveCall },
  } = useCallData()

  if (!selectedCall) {
    return null
  }

  const { duration, from, to, created_at, is_archived, direction } =
    selectedCall

  const handleCloseClick = React.useCallback(() => {
    toggleCallDetail(false)
  }, [toggleCallDetail])

  const handleArchiveClick = React.useCallback(() => {
    toggleArchiveCall(selectedCall)
  }, [selectedCall, toggleArchiveCall])

  const formattedDuration = React.useMemo(
    () => formatDuration(duration),
    [duration]
  )

  const [date, time] = React.useMemo(
    () => formatDateTime(created_at),
    [created_at]
  )

  return (
    <aside className={styles.call_detail_drawer} data-open={isCallDetailOpen}>
      <button onClick={handleCloseClick} className={styles.close_button}>
        <img src={closeIcon} width="100%" />
      </button>

      <div className={styles.avatar}>
        <img src={avatar} alt="" width={80} />
      </div>

      <p className={styles.call_number}>
        {direction === 'inbound'
          ? `${PHONE_NUMBERS[from] || from}`
          : `${PHONE_NUMBERS[to]}` || to}
      </p>

      <div className={styles.call_detail_info}>
        <p className={styles.call_detail_date}>{date}</p>
        <div className="">
          <div>
            <p>{time}</p>
          </div>
          <div className={styles.call_detail_column}>
            <p>{`${direction} Call`}</p>
            <p className={styles.call_duration}>{formattedDuration}</p>
          </div>
        </div>
      </div>

      <ArchiveButton onClick={handleArchiveClick} disabled={isLoading}>
        {is_archived ? 'Unarchive' : 'Archive'}
      </ArchiveButton>
    </aside>
  )
}
