import { useState, useEffect } from 'react'
import { fetchPost } from '@/services/api'
import type { Post } from '@/types/dummyjson'

export function usePost(id: number) {
  const [data, setData] = useState<Post | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false

    fetchPost(id)
      .then((result) => {
        setLoading(true)
        setError(null)
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
  }, [id])

  return { data, loading, error }
}
