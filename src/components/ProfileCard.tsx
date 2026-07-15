import type { HippoProfile } from '../data/profiles'

type Props = {
  profile: HippoProfile
  exitDirection?: 'left' | 'right' | null
  stacked?: boolean
}

export function ProfileCard({ profile, exitDirection = null, stacked = false }: Props) {
  const exitClass =
    exitDirection === 'right'
      ? 'card--exit-right'
      : exitDirection === 'left'
        ? 'card--exit-left'
        : ''

  return (
    <article
      className={`profile-card ${stacked ? 'profile-card--stacked' : ''} ${exitClass}`}
      aria-hidden={stacked}
    >
      <div className="profile-card__media">
        <img
          src={profile.photo}
          alt={`${profile.name}, a hippo near ${profile.location}`}
          loading={stacked ? 'lazy' : 'eager'}
          onError={(e) => {
            const el = e.currentTarget
            el.onerror = null
            el.src = `data:image/svg+xml,${encodeURIComponent(
              `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="1000" viewBox="0 0 800 1000">
                <defs>
                  <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#1A5C57"/>
                    <stop offset="100%" stop-color="#0B3D3A"/>
                  </linearGradient>
                </defs>
                <rect width="800" height="1000" fill="url(#g)"/>
                <ellipse cx="400" cy="520" rx="220" ry="170" fill="#E8A0A0"/>
                <ellipse cx="300" cy="390" rx="70" ry="85" fill="#E8A0A0"/>
                <ellipse cx="500" cy="390" rx="70" ry="85" fill="#E8A0A0"/>
                <circle cx="290" cy="470" r="22" fill="#1A2422"/>
                <circle cx="510" cy="470" r="22" fill="#1A2422"/>
                <ellipse cx="400" cy="560" rx="70" ry="45" fill="#C47A7A"/>
                <text x="400" y="780" text-anchor="middle" fill="#E8F2F0" font-family="Georgia,serif" font-size="48">${profile.name}</text>
              </svg>`,
            )}`
          }}
        />
        <div className="profile-card__scrim" />
      </div>
      <div className="profile-card__body">
        <h2 className="profile-card__name">
          {profile.name}
          <span className="profile-card__age">{profile.age}</span>
        </h2>
        <p className="profile-card__location">{profile.location}</p>
        <p className="profile-card__bio">{profile.bio}</p>
      </div>
    </article>
  )
}
