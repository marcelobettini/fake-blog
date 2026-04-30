import { usePostAuthor } from '../hooks/usePostAuthor'
import styles from './PostAuthor.module.css'

interface Props {
  userId: number
}

export function PostAuthor({ userId }: Props) {
  const { data: author, loading, error } = usePostAuthor(userId)

  if (loading) return <span className={styles.placeholder}>Cargando autor…</span>
  if (error || !author) return null

  return (
    <div className={styles.author}>
      <span className={styles.name}>
        {author.firstName} {author.lastName}
      </span>
      <span className={styles.email}>{author.email}</span>
    </div>
  )
}
