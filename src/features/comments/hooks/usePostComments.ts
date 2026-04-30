import { useState, useEffect } from 'react'
import { fetchPostComments } from '@/services/api'
import type { CommentsResponse } from '@/types/dummyjson'

export function usePostComments(postId: number) {
  const [data, setData] = useState<CommentsResponse | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false

    fetchPostComments(postId)
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
  }, [postId])

  return { data, loading, error }
}
