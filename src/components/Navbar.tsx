import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'

export function Navbar() {

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? `${styles.link} ${styles.active}` : styles.link



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

    </nav>
  )
}
