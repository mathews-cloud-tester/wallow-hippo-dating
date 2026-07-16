import type { HippoProfile } from '../data/profiles'
import type { ExitDirection } from '../hooks/useDeck'
import { ProfileCard } from './ProfileCard'

type Props = {
  current: HippoProfile | null
  next: HippoProfile | null
  isDone: boolean
  exitDirection: ExitDirection
  isExiting: boolean
  matchCount: number
  onLike: () => void
  onPass: () => void
  onShowMatches: () => void
  onReset: () => void
  onBack: () => void
}

export function Discover({
  current,
  next,
  isDone,
  exitDirection,
  isExiting,
  matchCount,
  onLike,
  onPass,
  onShowMatches,
  onReset,
  onBack,
}: Props) {
  return (
    <section className="discover" aria-label="Discover hippos">
      <header className="discover__nav">
        <button type="button" className="text-btn" onClick={onBack}>
          WALLOW
        </button>
        <button type="button" className="text-btn text-btn--accent" onClick={onShowMatches}>
          Matches{matchCount > 0 ? ` (${matchCount})` : ''}
        </button>
      </header>

      <div className="discover__stage">
        {isDone || !current ? (
          <div className="discover__empty">
            <p className="discover__empty-title">The river ran dry.</p>
            <p className="discover__empty-copy">
              You’ve met every hippo in this stretch. Come back when the tide turns — or start
              over.
            </p>
            <button type="button" className="btn btn--primary" onClick={onReset}>
              Swim again
            </button>
          </div>
        ) : (
          <div className="discover__deck">
            {next ? <ProfileCard profile={next} stacked /> : null}
            <ProfileCard
              profile={current}
              exitDirection={isExiting ? exitDirection : null}
            />
          </div>
        )}
      </div>

      {!isDone && current ? (
        <div className="discover__actions">
          <button
            type="button"
            className="action-btn action-btn--pass"
            onClick={onPass}
            disabled={isExiting}
            aria-label="Pass"
          >
            Pass
          </button>
          <button
            type="button"
            className="action-btn action-btn--like"
            onClick={onLike}
            disabled={isExiting}
            aria-label="Like"
          >
            Like
          </button>
        </div>
      ) : null}
    </section>
  )
}
