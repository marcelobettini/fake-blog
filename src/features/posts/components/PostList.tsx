import type { PostSummary } from '@/types/dummyjson'
import { PostCard } from './PostCard'
import './PostList.css'

interface Props {
  posts: PostSummary[]
}

export function PostList({ posts }: Props) {
  return (
    <section className='post-list'>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </section>
  )
}
