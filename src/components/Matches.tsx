import type { HippoProfile } from '../data/profiles'

type Props = {
  matches: HippoProfile[]
  onBack: () => void
  onClear: () => void
}

export function Matches({ matches, onBack, onClear }: Props) {
  return (
    <section className="matches" aria-label="Your matches">
      <header className="matches__nav">
        <button type="button" className="text-btn" onClick={onBack}>
          ← Discover
        </button>
        <p className="matches__brand">WALLOW</p>
      </header>

      <div className="matches__header">
        <h1 className="matches__title">Your mudmates</h1>
        <p className="matches__subtitle">
          {matches.length === 0
            ? 'No mutual wallows yet. Keep diving.'
            : `${matches.length} hippo${matches.length === 1 ? '' : 's'} waiting in the reeds.`}
        </p>
      </div>

      {matches.length > 0 ? (
        <>
          <ul className="matches__list">
            {matches.map((m) => (
              <li key={m.id} className="matches__item">
                <img src={m.photo} alt="" className="matches__avatar" />
                <div className="matches__info">
                  <p className="matches__name">
                    {m.name}
                    <span>{m.age}</span>
                  </p>
                  <p className="matches__loc">{m.location}</p>
                </div>
              </li>
            ))}
          </ul>
          <button type="button" className="text-btn matches__clear" onClick={onClear}>
            Clear matches
          </button>
        </>
      ) : (
        <button type="button" className="btn btn--primary" onClick={onBack}>
          Back to the river
        </button>
      )}
    </section>
  )
}
