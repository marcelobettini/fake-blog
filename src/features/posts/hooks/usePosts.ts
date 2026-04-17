import { useState, useEffect } from 'react'
import { fetchPosts } from '@/services/api'
import type { PostsResponse } from '@/types/dummyjson'

const LIMIT = 12
export function usePosts(page: number) {
    const [data, setData] = useState<PostsResponse | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        let cancelled = false
        setLoading(true)

        fetchPosts((page - 1) * LIMIT, LIMIT)
            .then(result => {
                if (!cancelled) {
                    setData(result)
                }
            })
            .catch((err: Error) => {
                if (!cancelled) {
                    setError(err.message)
                }
            })
            .finally(() => setLoading(false))

        //cleanup
        return () => {
            cancelled = true
        }

    }, [page])

    return { data, loading, error }

}
