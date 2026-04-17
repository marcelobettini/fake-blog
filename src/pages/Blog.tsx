import { usePosts } from "@/features/posts/hooks/usePosts"

export function Blog() {
    const { data, loading, error } = usePosts(1)
    if (loading) return <p>cargando posts...</p>
    if (error) return <p>{error}</p>
    return (
        <>
            <h2>Lista de posts resumidos</h2>

            {data?.posts.map(p => <h3>{p.title}</h3>)}

        </>
    )
}