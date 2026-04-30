import { Link } from 'react-router-dom'
import type { PostSummary } from '@/types/dummyjson'
import './PostCard.css'

interface Props {
  post: PostSummary
}

export function PostCard({ post }: Props) {
  return (
    <article className='post-card'>
      <Link to={`/blog/${post.id}`}>
        <h2>{post.title}</h2>
      </Link>
      <p>{post.views} vistas</p>
      <ul>
        {post.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </article>
  )
}
