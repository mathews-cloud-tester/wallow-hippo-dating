import { useState } from 'react'
import { Discover } from './components/Discover'
import { Hero } from './components/Hero'
import { MatchModal } from './components/MatchModal'
import { Matches } from './components/Matches'
import { useDeck } from './hooks/useDeck'

type Screen = 'hero' | 'discover' | 'matches'

export default function App() {
  const [screen, setScreen] = useState<Screen>('hero')
  const deck = useDeck()

  return (
    <div className="app">
      {screen === 'hero' ? (
        <Hero onStart={() => setScreen('discover')} />
      ) : null}

      {screen === 'discover' ? (
        <Discover
          current={deck.current}
          next={deck.next}
          isDone={deck.isDone}
          exitDirection={deck.exitDirection}
          isExiting={deck.isExiting}
          matchCount={deck.matches.length}
          onLike={deck.like}
          onPass={deck.pass}
          onShowMatches={() => setScreen('matches')}
          onReset={deck.resetDeck}
          onBack={() => setScreen('hero')}
        />
      ) : null}

      {screen === 'matches' ? (
        <Matches
          matches={deck.matches}
          onBack={() => setScreen('discover')}
          onClear={deck.clearMatches}
        />
      ) : null}

      {deck.pendingMatch ? (
        <MatchModal
          profile={deck.pendingMatch}
          onContinue={deck.dismissMatch}
          onViewMatches={() => {
            deck.dismissMatch()
            setScreen('matches')
          }}
        />
      ) : null}
    </div>
  )
}
