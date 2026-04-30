import styles from './Pagination.module.css'
interface Props {
    currentPage: number
    totalPages: number
    onPageChange: (page: number) => void
}
export function Pagination({ currentPage, totalPages, onPageChange }: Props) {
    return (
        <nav className={styles.pagination} >
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage <= 1}>prev</button>
            <span>{currentPage} / {totalPages}</span>
            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage >= totalPages}

            >next</button>
        </nav >
    )

}