import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '@/features/auth/hooks/useAuth'
import styles from './Navbar.module.css'

export function Navbar() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? `${styles.link} ${styles.active}` : styles.link

  const handleLogout = () => {
    logout()
  }

  return (
    <nav className={styles.nav}>
      <NavLink to="/" end className={linkClass}>
        Home
      </NavLink>
      <NavLink to="/blog" className={linkClass}>
        Blog
      </NavLink>
      <NavLink to="/about" className={linkClass}>
        About
      </NavLink>
      {user && (
        <NavLink to="/users" className={linkClass}>Users</NavLink>
      )}
      {user ? (
        <button className={styles.logoutBtn} onClick={handleLogout}>Logout</button>
      )
        : (
          <NavLink to="/login" className={linkClass}>Login</NavLink>
        )

      }


    </nav>
  )
}
