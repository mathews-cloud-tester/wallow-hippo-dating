import type { HippoProfile } from '../data/profiles'

type Props = {
  profile: HippoProfile
  onContinue: () => void
  onViewMatches: () => void
}

export function MatchModal({ profile, onContinue, onViewMatches }: Props) {
  return (
    <div className="match-modal" role="dialog" aria-modal="true" aria-labelledby="match-title">
      <div className="match-modal__backdrop" onClick={onContinue} />
      <div className="match-modal__panel">
        <p className="match-modal__eyebrow">It’s a Wallow!</p>
        <h2 id="match-title" className="match-modal__title">
          You and {profile.name}
        </h2>
        <div className="match-modal__photos">
          <div className="match-modal__you" aria-hidden="true">
            <span>You</span>
          </div>
          <img src={profile.photo} alt={profile.name} className="match-modal__them" />
        </div>
        <p className="match-modal__copy">
          {profile.name} likes you back. The mud is warmer already.
        </p>
        <div className="match-modal__actions">
          <button type="button" className="btn btn--ghost" onClick={onContinue}>
            Keep swimming
          </button>
          <button type="button" className="btn btn--primary" onClick={onViewMatches}>
            See matches
          </button>
        </div>
      </div>
    </div>
  )
}
