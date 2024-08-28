import styles from './index.module.css'

export const ArchiveButton = ({ onClick, disabled, children }) => {
  return (
    <button
      onClick={onClick}
      className={styles.archive_button}
      data-disabled={disabled}
    >
      {children}
    </button>
  )
}
