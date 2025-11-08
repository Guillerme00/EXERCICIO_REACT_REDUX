import { useEffect, useState } from 'react'

export function useGame(id: number) {
  const [game, setGame] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<null | string>(null)

  useEffect(() => {
    async function fetchGame() {
      try {
        setLoading(true)
        const response = await fetch(
          `https://store.steampowered.com/api/appdetails?appids=${id}`
        )
        if (!response.ok) throw new Error('Failed to fetch')
        const data = await response.json()
        setGame(data)
      } catch (err) {
        setError((err as Error).message)
      } finally {
        setLoading(false)
      }
    }

    fetchGame()
  }, [id])

  return { game, loading, error }
}
