import React from 'react'
import incomingCall from './images/incoming-call.svg'
import outcomingCall from './images/outcoming-call.svg'
import { formatDateTime } from '../../helpers'
import { PHONE_NUMBERS } from '../../constants'
import styles from './index.module.css'

const ICONS = {
  inbound: incomingCall,
  outbound: outcomingCall,
}

export const CallCard = ({
  from,
  to,
  direction,
  created_at,
  onClick,
  call_type,
}) => {
  const isInbound = direction === 'inbound'
  const toNum = PHONE_NUMBERS[to] || to
  const fromNum = PHONE_NUMBERS[from] || from

  const isToday = React.useMemo(
    () => new Date().toDateString() === new Date(created_at).toDateString(),
    [created_at]
  )

  const [date, time] = React.useMemo(
    () => formatDateTime(created_at),
    [created_at]
  )

  return (
    <div className={styles.call_card} onClick={onClick}>
      <div
        className={styles.icon_container}
        data-type={isInbound ? call_type : direction}
      >
        <img width={20} src={ICONS[direction]}></img>
      </div>
      <div className={styles.call_info}>
        <p className={styles.call_number}>{isInbound ? fromNum : toNum}</p>
        <p className={styles.call_type}>{isInbound ? call_type : direction}</p>
      </div>
      <div className={styles.call_card_date}>
        <span>{isToday ? time : date}</span>
      </div>
    </div>
  )
}
