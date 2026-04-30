import { usePostComments } from '@/features/comments/hooks/usePostComments'
import { Spinner } from '@/components/Spinner'
import { ErrorMessage } from '@/components/ErrorMessage'
import { CommentItem } from './CommentItem'
import styles from './CommentList.module.css'

interface Props {
  postId: number
}

export function CommentList({ postId }: Props) {
  const { data, loading, error } = usePostComments(postId)

  if (loading) return <Spinner />
  if (error) return <ErrorMessage message={error} />

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Comentarios ({data?.total ?? 0})</h2>
      {data?.comments.map((comment) => (
        <CommentItem key={comment.id} comment={comment} />
      ))}
    </section>
  )
}
