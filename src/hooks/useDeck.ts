import { useCallback, useMemo, useState } from 'react'
import { profiles, type HippoProfile } from '../data/profiles'

const MATCHES_KEY = 'wallow-matches'

function loadMatches(): HippoProfile[] {
  try {
    const raw = localStorage.getItem(MATCHES_KEY)
    if (!raw) return []
    const ids: string[] = JSON.parse(raw)
    return ids
      .map((id) => profiles.find((p) => p.id === id))
      .filter((p): p is HippoProfile => Boolean(p))
  } catch {
    return []
  }
}

function saveMatchIds(matches: HippoProfile[]) {
  localStorage.setItem(MATCHES_KEY, JSON.stringify(matches.map((m) => m.id)))
}

export type ExitDirection = 'left' | 'right' | null

export function useDeck() {
  const [index, setIndex] = useState(0)
  const [matches, setMatches] = useState<HippoProfile[]>(loadMatches)
  const [pendingMatch, setPendingMatch] = useState<HippoProfile | null>(null)
  const [exitDirection, setExitDirection] = useState<ExitDirection>(null)
  const [isExiting, setIsExiting] = useState(false)

  const remaining = useMemo(() => profiles.slice(index), [index])
  const current = remaining[0] ?? null
  const next = remaining[1] ?? null
  const isDone = index >= profiles.length

  const advance = useCallback(
    (direction: 'left' | 'right', onComplete?: (profile: HippoProfile) => void) => {
      if (isExiting || !current) return
      setExitDirection(direction)
      setIsExiting(true)

      window.setTimeout(() => {
        onComplete?.(current)
        setIndex((i) => i + 1)
        setExitDirection(null)
        setIsExiting(false)
      }, 320)
    },
    [current, isExiting],
  )

  const pass = useCallback(() => {
    advance('left')
  }, [advance])

  const like = useCallback(() => {
    advance('right', (profile) => {
      if (profile.likesYou) {
        setMatches((prev) => {
          if (prev.some((m) => m.id === profile.id)) return prev
          const nextMatches = [...prev, profile]
          saveMatchIds(nextMatches)
          return nextMatches
        })
        setPendingMatch(profile)
      }
    })
  }, [advance])

  const dismissMatch = useCallback(() => {
    setPendingMatch(null)
  }, [])

  const clearMatches = useCallback(() => {
    setMatches([])
    localStorage.removeItem(MATCHES_KEY)
  }, [])

  const resetDeck = useCallback(() => {
    setIndex(0)
    setPendingMatch(null)
    setExitDirection(null)
    setIsExiting(false)
  }, [])

  return {
    current,
    next,
    index,
    isDone,
    matches,
    pendingMatch,
    exitDirection,
    isExiting,
    pass,
    like,
    dismissMatch,
    clearMatches,
    resetDeck,
    total: profiles.length,
  }
}
