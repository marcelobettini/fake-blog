import { usePosts } from '@/features/posts/hooks/usePosts'
import { PostList } from '@/features/posts/components/PostList'
import { Spinner } from '@/components/Spinner'
import { ErrorMessage } from '@/features/posts/components/ErrorMessage'
import { Pagination } from '@/components/Pagination'
import { useState } from 'react'


const LIMIT = 12
export function Blog() {
    const [page, setPage] = useState(1)
    const { data, loading, error } = usePosts(page)
    const totalPages = data ? Math.ceil(data.total / LIMIT) : 0


    return (
        <main className="outerContainer">
            <h1>Blog</h1>

            {loading && <Spinner />}
            {error && <ErrorMessage message={error} />}

            {!loading && !error && data && (
                <>
                    {data.posts.length === 0 ? (
                        <p>No se encontraron posts.</p>
                    ) : (
                        <>
                            <PostList posts={data.posts} />
                        </>
                    )}
                    <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
                </>
            )}
        </main>
    )
}