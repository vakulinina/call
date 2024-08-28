import { ArchiveButton } from '../ArchiveButton/ArchiveButton.jsx'
import { CallCard } from '../CallCard/CallCard.jsx'
import styles from './index.module.css'

export const CallsList = ({
  calls,
  onButtonClick,
  onCardClick,
  buttonLabel,
}) => {
  return (
    <section className={styles.calls_list}>
      {!calls.length ? (
        <div className={styles.no_calls}>You have no calls</div>
      ) : (
        <>
          <ArchiveButton onClick={onButtonClick}>{buttonLabel}</ArchiveButton>

          {calls.map((call) => (
            <CallCard
              onClick={() => onCardClick({ id: call.id })}
              key={call.id}
              {...call}
            />
          ))}
        </>
      )}
    </section>
  )
}
