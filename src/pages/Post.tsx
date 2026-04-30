import { useParams, Navigate, Link } from 'react-router-dom'
import { usePost } from '@/features/posts/hooks/usePost'
import { PostAuthor } from '@/features/posts/components/PostAuthor'
import { CommentList } from '@/features/comments/components/CommentList'
import { Spinner } from '@/components/Spinner'
import { ErrorMessage } from '@/features/posts/components/ErrorMessage'
import styles from './Post.module.css'

export function Post() {
  const { id } = useParams()
  const postId = Number(id)

  if (!id || isNaN(postId)) return <Navigate to="/blog" replace />

  return <PostDetail postId={postId} />
}

function PostDetail({ postId }: { postId: number }) {
  const { data: post, loading, error } = usePost(postId)

  if (loading) return <Spinner />
  if (error) return <ErrorMessage message={error} />
  if (!post) return null

  return (
    <main className="outerContainer">
      <Link to="/blog" className={styles.back}>
        ← Volver al listado
      </Link>
      <header className={styles.header}>
        <div className={styles.tags}>
          {post.tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
        <h1 className={styles.title}>{post.title}</h1>
        <PostAuthor userId={post.userId} />
        <div className={styles.meta}>
          <span>{post.views} vistas</span>
          <span>♥ {post.reactions.likes}</span>
          <span>✕ {post.reactions.dislikes}</span>
        </div>
      </header>

      <p className={styles.body}>{post.body}</p>

      <CommentList postId={postId} />
    </main>
  )
}
