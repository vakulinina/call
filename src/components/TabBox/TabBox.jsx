import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './index.module.css'
import cx from 'classnames'

const TABS = [
  { id: 'activity', url: '/', label: 'Activity' },
  {
    id: 'archive',
    url: '/archive',
    label: 'Archive',
  },
]

export const TabBox = () => {
  return (
    <div className={styles.tabs}>
      {TABS.map(({ id, url, label }) => (
        <NavLink
          to={url}
          key={id}
          className={({ isActive }) =>
            cx(styles.navlink, isActive && styles.active)
          }
        >
          {label}
        </NavLink>
      ))}
    </div>
  )
}
