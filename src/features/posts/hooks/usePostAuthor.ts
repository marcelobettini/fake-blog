import { useState, useEffect } from 'react'
import { fetchPostAuthor } from '@/services/api'
import type { PostAuthor } from '@/types/dummyjson'

export function usePostAuthor(userId: number) {
  const [data, setData] = useState<PostAuthor | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false

    fetchPostAuthor(userId)
      .then((result) => {
        setError(null)
        setLoading(true)
        if (!cancelled) {
          setData(result)
        }
      })
      .catch((err: unknown) => {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : 'Error desconocido')
        }
      })
      .finally(() => setLoading(false))

    return () => {
      cancelled = true
    }
  }, [userId])

  return { data, loading, error }
}
