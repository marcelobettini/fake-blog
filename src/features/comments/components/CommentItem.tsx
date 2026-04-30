import type { Comment } from '@/types/dummyjson'
import styles from './CommentItem.module.css'

interface Props {
  comment: Comment
}

export function CommentItem({ comment }: Props) {
  return (
    <article className={styles.comment}>
      <header className={styles.header}>
        <span className={styles.author}>{comment.user.username}</span>
        <span className={styles.likes}>♥ {comment.likes}</span>
      </header>
      <p className={styles.body}>{comment.body}</p>
    </article>
  )
}
